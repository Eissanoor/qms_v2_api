import { deleteFile } from "../utils/file.js";
import PDFGenerator from "../utils/pdfGenerator.js";
import prisma from "../utils/prismaClient.js";

export async function generateDepartmentTicket({
  id,
  value,
  patient,
  department,
}) {
  const ticketNumber = patient.ticketNumber;
  const barcode = patient.barcode;

  const waitingCount = await prisma.patient.count({
    where: {
      state: {
        in: [0, 1],
      },
      departmentId: value.departmentId,
    },
  });

  const ticketData = await PDFGenerator.generateDepartmentTicket({
    ...patient,
    department,
    ticketNumber: ticketNumber,
    barcode,
    vitalSigns: patient.vitalSigns[0],
    waitingCount,
    issueDate: new Date(),
    counter: ticketNumber,
  });

  if (patient.ticket) {
    await deleteFile(patient.ticket);
  }

  await prisma.patient.update({
    where: { id },
    data: {
      departmentId: value.departmentId,
      ticket: ticketData.relativePath,
      barcode,
      registrationDate: new Date(),
      state: 0,
      callPatient: false,
      assignDeptTime: new Date(),
    },
  });
}
