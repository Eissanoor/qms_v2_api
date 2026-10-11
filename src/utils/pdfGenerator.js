import bwipjs from "bwip-js";
import ejs from "ejs";
import fs from "fs-extra";
import os from "os";
import path, { dirname } from "path";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { ensureDir, getRelativePath } from "./file.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Add logo path configuration
const LOGO_PATH = "/assets/images/gst-logo.png";
const DOMAIN = process.env.DOMAIN || "http://localhost:3000";
const LOGO_URL = `${DOMAIN}${LOGO_PATH}`;

class PDFGenerator {
  // The server env can set PUPPETEER_EXECUTABLE_PATH to a docs placeholder
  // such as win64-<ver>. That file is never installed, so ignore it and use
  // a Chrome binary that actually exists.
  static findChromeExecutable(root, depth = 0) {
    if (!root || depth > 6 || !fs.existsSync(root)) return null;

    let entries;
    try {
      entries = fs.readdirSync(root, { withFileTypes: true });
    } catch {
      return null;
    }

    for (const entry of entries) {
      const fullPath = path.join(root, entry.name);
      if (entry.isFile() && entry.name.toLowerCase() === "chrome.exe") {
        return fullPath;
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const found = this.findChromeExecutable(
        path.join(root, entry.name),
        depth + 1
      );
      if (found) return found;
    }

    return null;
  }

  static resolveChromeExecutable() {
    const configured = process.env.PUPPETEER_EXECUTABLE_PATH;
    if (configured && fs.existsSync(configured)) return configured;

    const roots = [
      process.env.PUPPETEER_CACHE_DIR,
      "C:\\puppeteer-chrome",
      path.join(os.homedir(), ".cache", "puppeteer"),
      "C:\\Program Files\\Google\\Chrome\\Application",
      "C:\\Program Files (x86)\\Google\\Chrome\\Application",
    ].filter(Boolean);

    for (const root of roots) {
      const found = this.findChromeExecutable(root);
      if (found) return found;
    }

    throw new Error(
      "Chrome was not found on this server. Install it with: npx puppeteer browsers install chrome"
    );
  }

  // Puppeteer otherwise calls mkdtemp in os.tmpdir(). On this Windows service
  // that path is the 8.3 name C:\Users\ADMINI~1\AppData\Local\Temp\1, and
  // Node fails it with EPERM. A long path under the app is writable.
  static async launchBrowser() {
    const profileRoot = path.join(process.cwd(), "uploads", "chrome-tmp");
    const chromeHome = path.join(process.cwd(), "uploads", "chrome-home");
    await fs.ensureDir(profileRoot);
    await fs.ensureDir(chromeHome);
    const userDataDir = await fs.mkdtemp(path.join(profileRoot, "profile-"));
    const executablePath = this.resolveChromeExecutable();

    const browser = await puppeteer.launch({
      headless: true,
      executablePath,
      userDataDir,
      env: {
        ...process.env,
        HOME: chromeHome,
        USERPROFILE: chromeHome,
        TMP: chromeHome,
        TEMP: chromeHome,
      },
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
        "--disable-software-rasterizer",
        "--no-first-run",
        "--disable-extensions",
        "--disable-crash-reporter",
      ],
    });

    return { browser, userDataDir };
  }

  // page.pdf() reads the file through Chrome IO.read. That call fails on the
  // Windows service with "Protocol error (IO.read): Read failed". Base64
  // returns the PDF in the same response and does not use that stream.
  static async writePdf(page, absolutePath) {
    const client = await page.createCDPSession();
    const result = await client.send("Page.printToPDF", {
      transferMode: "ReturnAsBase64",
      printBackground: true,
      paperWidth: 80 / 25.4,
      paperHeight: 150 / 25.4,
      marginTop: 10 / 96,
      marginBottom: 10 / 96,
      marginLeft: 10 / 96,
      marginRight: 10 / 96,
      preferCSSPageSize: false,
    });

    if (!result?.data) {
      throw new Error("Chrome did not return ticket PDF data");
    }

    await fs.writeFile(absolutePath, Buffer.from(result.data, "base64"));
    await client.detach().catch(() => {});
  }
  // Utility function to format date time
  static formatDateTime(date) {
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }

  // Utility function to generate barcode text
  static generateBarcodeText(date, counter) {
    return `${date.getFullYear()}${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}${String(date.getDate()).padStart(2, "0")}${String(
      date.getHours()
    ).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}${String(
      date.getSeconds()
    ).padStart(2, "0")}${counter}`;
  }

  // Utility function to generate barcode buffer
  static async generateBarcodeBuffer(text) {
    return new Promise((resolve, reject) => {
      bwipjs.toBuffer(
        {
          bcid: "code128", // Barcode type
          text: text, // Text to encode
          scale: 3, // 3x scaling factor
          height: 10, // Bar height, in millimeters
          includetext: false, // Don't include text below the barcode
          textxalign: "center", // Center the text
        },
        (err, png) => {
          if (err) reject(err);
          else resolve(png);
        }
      );
    });
  }

  static async generateTicket(data) {
    let browser;
    let userDataDir;
    try {
      const templatePath = path.join(__dirname, "../view/ticket.ejs");
      const templateContent = await fs.readFile(templatePath, "utf-8");

      // Format date for barcode and display
      const now = data.issueDate;
      const formattedDateTime = this.formatDateTime(now);
      const barcodeText = this.generateBarcodeText(now, data.counter);

      // Generate barcode using bwip-js
      const barcodeBuffer = await this.generateBarcodeBuffer(barcodeText);

      // Convert to base64
      const barcodeBase64 = `data:image/png;base64,${barcodeBuffer.toString(
        "base64"
      )}`;

      // Prepare template data
      const templateData = {
        ...data,
        formattedDateTime,
        barcode: barcodeBase64,
        barcodeText,
      };

      // Generate HTML
      const html = await ejs.render(templateContent, templateData, {
        async: true,
      });

      // Ensure uploads directory exists
      const uploadsDir = await ensureDir("uploads/tickets");

      // Generate unique filename
      const fileName = `ticket-${data.deptcode}-${
        data.counter
      }-${Date.now()}.pdf`;
      const absolutePath = path.join(uploadsDir, fileName);
      const relativePath = getRelativePath(absolutePath);

      // Create directory if it doesn't exist
      await fs.ensureDir(path.join("uploads", "tickets"));

      // Generate PDF
      ({ browser, userDataDir } = await this.launchBrowser());
      const page = await browser.newPage();
      await page.setContent(html, {
        waitUntil: "domcontentloaded",
      });
      await this.writePdf(page, absolutePath);

      return {
        absolutePath,
        relativePath,
        barcodeBase64,
      };
    } catch (error) {
      console.error("Error generating ticket:", error);
      throw error;
    } finally {
      if (browser) await browser.close().catch(() => {});
      if (userDataDir) await fs.remove(userDataDir).catch(() => {});
    }
  }

  static async generateDepartmentTicket(data) {
    let browser;
    let userDataDir;
    try {
      const templatePath = path.join(__dirname, "../view/departmentTicket.ejs");
      const templateContent = await fs.readFile(templatePath, "utf-8");

      // Format date for display
      const timeVs = data.vitalSigns?.timeVs
        ? this.formatDateTime(new Date(data.vitalSigns.timeVs))
        : "";

      const formattedDateTime = this.formatDateTime(new Date());

      // Generate barcode
      const barcodeText = this.generateBarcodeText(new Date(), data.counter);
      const barcodeBuffer = await this.generateBarcodeBuffer(barcodeText);
      const barcodeBase64 = `data:image/png;base64,${barcodeBuffer.toString(
        "base64"
      )}`;

      // Generate ticket number format: {counter}+{first letter of department}
      const ticketNumber = `${data.ticketNumber}${
        data.department?.deptname?.[0]?.toUpperCase() || ""
      }${data.department?.deptname?.[1]?.toUpperCase() || ""}`;

      // Prepare template data
      const templateData = {
        deptname: data.department?.deptname || "",
        counter: data.ticketNumber,
        ticketNumber,
        name: data.name || "",
        age: data.age || "",
        gender: data.sex || "",
        nationality: data.nationality || "",
        timeVs,
        bp: data.vitalSigns?.bp || "",
        temp: data.vitalSigns?.temp || "",
        hr: data.vitalSigns?.hr || "",
        rr: data.vitalSigns?.rr || "",
        spo2: data.vitalSigns?.spo2 || "",
        rbs: data.vitalSigns?.rbs || "",
        height: data.vitalSigns?.height || "",
        weight: data.vitalSigns?.weight || "",
        allergies: data.vitalSigns?.allergies || false,
        complain: data.cheifComplaint || "",
        waiting: data.state || 0,
        barcode: barcodeBase64,
        barcodeText,
        formattedDateTime,
        waitingCount: data.waitingCount || 0,
      };

      const html = await ejs.render(templateContent, templateData, {
        async: true,
      });

      // Ensure uploads directory exists
      const uploadsDir = await ensureDir("uploads/tickets");

      // Generate unique filename
      const fileName = `department-ticket-${data.id}-${Date.now()}.pdf`;
      const absolutePath = path.join(uploadsDir, fileName);
      const relativePath = getRelativePath(absolutePath);

      // Create directory if it doesn't exist
      await fs.ensureDir(path.join("uploads", "tickets"));

      // Generate PDF
      ({ browser, userDataDir } = await this.launchBrowser());
      const page = await browser.newPage();
      await page.setContent(html, {
        waitUntil: "domcontentloaded",
      });
      await this.writePdf(page, absolutePath);

      return {
        absolutePath,
        relativePath,
        ticketNumber,
        barcodeText,
      };
    } catch (error) {
      console.error("Error generating department ticket:", error);
      throw error;
    } finally {
      if (browser) await browser.close().catch(() => {});
      if (userDataDir) await fs.remove(userDataDir).catch(() => {});
    }
  }
}

export default PDFGenerator;
