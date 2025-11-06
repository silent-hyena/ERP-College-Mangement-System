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
  

  const groups = Object.entries(grouped);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Student Grades</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {groups.map(([key, items]) => {
          const [year, semLabel] = key.split("-S");
          return (
            <div
              key={key}
              className="bg-white shadow rounded-xl p-4 border border-gray-200"
            >
              <h3 className="text-lg font-medium mb-3 text-gray-700">
                Year {year} – Semester {semLabel}
              </h3>
              <table className="w-full text-sm border border-gray-300 rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-3 py-2 text-left">Course ID</th>
                    <th className="border px-3 py-2 text-left">Course Title</th>
                    <th className="border px-3 py-2 text-left">Credits</th>
                    <th className="border px-3 py-2 text-left">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border px-3 py-2">{item.courseid}</td>
                      <td className="border px-3 py-2">{item.coursetitle}</td>
                      <td className="border px-3 py-2">{item.credits}</td>
                      <td className="border px-3 py-2 font-medium">
                        {item.grade}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTable;
