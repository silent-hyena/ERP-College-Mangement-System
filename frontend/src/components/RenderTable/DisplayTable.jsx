import React from "react";

const DisplayTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No records available.</p>;
  }

  // Get column headers dynamically
  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-light-subtle border border-gray-300 rounded-xl text-sm">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="border-b px-4 py-2 text-left font-semibold capitalize"
              >
                {col.replaceAll("_", " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {columns.map((col) => (
                <td key={col} className="border-b px-4 py-2 text-gray-700">
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;
