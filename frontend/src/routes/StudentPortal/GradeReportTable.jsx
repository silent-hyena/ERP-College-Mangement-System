import React from "react";

const CourseTable = ({ data }) => {
  // Group data by year and semester
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No grade data available.</p>;
  }
  
  const grouped = data.reduce((acc, item) => {
    const key = `${item.year}-S${item.semester}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  
  function getGPA(report){
    let gradePoint = 0;
    const gradeMap = {
      'A+':10,
      'A':9,
      'B+':8,
      'B':7,
      'C+':6,
      'C':5, 
      'D':4,
      'F':0
    };
    let totalCredits =0;
    for(let i =0;i< report.length; i++){
      gradePoint += Number(report[i].credits)*(gradeMap[report[i].grade]);
      totalCredits += Number(report[i].credits);
    };
  console.log(totalCredits);
  return  (gradePoint/totalCredits).toFixed(2);
   
    
  }
  const groups = Object.entries(grouped);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Student Grades</h2>
      <div className="grid ">
        {groups.map(([key, items]) => {
          const [year, semLabel] = key.split("-S");
          return (
            <div
              key={key}
              className="bg-white shadow rounded-xl p-4 border border-gray-200 h-96 flex flex-col"
              style={{alignContent: "center"}}
            >
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Year {year} – Semester {semLabel}
              </h3>
              <div className="flex-1 overflow-auto mt-2">
                <table className="w-full text-sm min-w-full table-fixed border-collapse" style={{ height: "280px", width: "600px", overflowY: "auto" }}>
                  <thead className="bg-gray-100 sticky top-0 z-10">
                    <tr>
                      <th className="border px-3 py-2 text-left w-24">Course ID</th>
                      <th className="border px-3 py-2 text-left">Course Title</th>
                      <th className="border px-3 py-2 text-left w-16">Credits</th>
                      <th className="border px-3 py-2 text-left w-16">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 h-400">
                        <td className="border px-3 py-2">{item.courseid}</td>
                        <td className="border px-3 py-2">{item.coursetitle}</td>
                        <td className="border px-3 py-2">{item.credits}</td>
                        <td className="border px-3 py-2 font-medium">{item.grade}</td>
                      </tr>
                    ))}
                    
                  </tbody>
                </table>
                <h5 className="mt-2 font-medium text-gray-900">SGPA:  {getGPA(items)}</h5>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTable;
