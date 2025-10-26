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

  // Handle single object (convert to array for uniform handling)
  const dataArray = Array.isArray(data) ? data : [data];

  if (type === "excel") {
    // Convert to Excel
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${fileName}.xlsx`);
  } else if (type === "pdf") {
    // Convert to PDF
    const doc = new jsPDF();

    if (dataArray.length === 1) {
      // Single object → Key: Value format
      const entries = Object.entries(dataArray[0]);
      autoTable(doc, {
        head: [["Field", "Value"]],
        body: entries,
      });
    } else {
      // Array of objects → Table format
      const columns = Object.keys(dataArray[0]);
      const rows = dataArray.map((obj) => columns.map((key) => obj[key]));
      autoTable(doc, {
        head: [columns],
        body: rows,
      });
    }

    doc.save(`${fileName}.pdf`);
  } else {
    console.error("Invalid file type. Use 'excel' or 'pdf'.");
  }
}
