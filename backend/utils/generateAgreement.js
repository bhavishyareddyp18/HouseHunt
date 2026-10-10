const PDFDocument = require("pdfkit");

function createAgreement(data) {

  const doc = new PDFDocument();

  doc.fontSize(20)
     .text("Rental Agreement", { align: "center" });

  doc.moveDown();

  doc.fontSize(12);

  doc.text(`Owner: ${data.ownerName}`);
  doc.text(`Tenant: ${data.tenantName}`);
  doc.text(`Property: ${data.propertyTitle}`);
  doc.text(`Rent: ₹${data.rent}`);
  doc.text(`Duration: ${data.duration} months`);

  doc.moveDown();

  doc.text(
    "This agreement is legally binding between both parties."
  );

  doc.end();

  return doc;

}

module.exports = createAgreement;