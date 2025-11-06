import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * Download data as Excel or PDF
 * @param {Object|Array} data - Single object or array of objects
 * @param {"excel"|"pdf"} type - Output file type
 * @param {string} fileName - File name without extension
 */
export function downloadData(data, type = "excel", fileName = "data") {
  if (!data) {
    console.error("No data provided for download");
    return;
  }

  const dataArray = Array.isArray(data) ? data : [data];

  // Excel export
  if (type === "excel") {
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
    return;
  }

  if (type !== "pdf") {
    console.error("Invalid file type. Use 'excel' or 'pdf'.");
    return;
  }

  // --- PDF Export ---
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(fileName.replace(/_/g, " ").toUpperCase(), 40, 40);

  let currentY = 70;

  dataArray.forEach((obj, index) => {
    const keys = Object.keys(obj);
    const values = Object.values(obj).map((v) => (v == null ? "" : String(v)));

    // Add record title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`Record ${index + 1}`, 40, currentY);
    currentY += 10;

    // Draw table
    autoTable(doc, {
      startY: currentY + 5,
      head: [keys],
      body: [values],
      theme: "grid",
      styles: {
        fontSize: 9,
        cellPadding: 5,
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        halign: "center",
        fontStyle: "bold",
      },
      bodyStyles: {
        halign: "left",
      },
      alternateRowStyles: {
        fillColor: [248, 248, 248],
      },
      margin: { left: 40, right: 40 },
      tableLineColor: [200, 200, 200],
      tableLineWidth: 0.2,
      didDrawPage: (data) => {
        currentY = data.cursor.y + 40;
      },
    });

    // Add a new page if needed
    if (currentY > doc.internal.pageSize.height - 100 && index < dataArray.length - 1) {
      doc.addPage();
      currentY = 60;
    }
  });

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.getWidth() - 80,
      doc.internal.pageSize.getHeight() - 20
    );
  }

  doc.save(`${fileName}.pdf`);
}
