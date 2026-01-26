import dotenv from "dotenv";
import express from "express";
import path, { dirname } from "path";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

import config from "./config/config.js";
import swaggerSpec from "./config/swagger.js";
import cors from "cors";
import { errorHandler, notFoundHandler } from "./middlewares/error.js";
import routes from "./routes.js";
import routesV2 from "./routesV2.js";
import socketService from "./services/socket.js";

const PORT = config.PORT;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
// CORS: allow all origins/ports
app.use(
  cors({
    origin: true, // reflect request origin, effectively allowing all
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statically serverd routes
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
app.use("/api/v1", routes);
app.use("/api/v2", routesV2);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error Routes
app.use(notFoundHandler);
app.use(errorHandler);

const server = app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

// Initialize socket
socketService.initialize(server);
