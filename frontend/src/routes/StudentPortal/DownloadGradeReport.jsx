import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function downloadGradeReport(data, fileName = "grade_report") {
  if (!Array.isArray(data) || data.length === 0) return;

  const student = data[0];  // first object is profile
  const courses = data.slice(1); // rest are course grade rows

  // group by year + semester
  const grouped = {};
  courses.forEach(c => {
    const key = `${c.year}-S${c.semester}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(c);
  });

  const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });

  // ------- HEADER USER PROFILE ---------
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Student Grade Report", 40, 40);

  doc.setFontSize(12);
  doc.text(`Name: ${student.Name}`, 40, 70);
  doc.text(`SID: ${student.SID}`, 40, 90);
  doc.text(`Email: ${student.Email}`, 40, 110);
  doc.text(`Mobile: ${student.Mobile}`, 40, 130);
  doc.text(`Branch: ${student.Branch}`, 40, 150);
  doc.text(`DOB: ${student.DOB}`, 40, 170);

  let y = 200;

  // ------- SEMESTER TABLES -------
  Object.entries(grouped).forEach(([semKey, records]) => {
    const head = [["Course ID", "Course Title", "Credits", "Grade"]];
    const body = records.map(r => [
      r.courseid,
      r.coursetitle,
      r.credits,
      r.grade,
      
    ]);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`${semKey}`, 40, y);
    y += 15;

    autoTable(doc, {
      startY: y,
      head,
      body,
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 5 },
      margin: { left: 40, right: 40 }
    });

    y = doc.lastAutoTable.finalY + 30;
  });

  doc.save(`${fileName}.pdf`);
}
