import React from "react";

const DisplayTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-muted mt-4">
        No records available.
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div
      className="table-responsive border rounded p-2"
      style={{

        maxHeight: "1200px",
        minHeight: "375px",
        overflowY: "auto",
        overflowX: "auto",
      }}
    >
      <table
        className="table table-bordered table-hover table-sm mb-0"
        style={{
          tableLayout: "fixed",
          minWidth: "1100px" 
        }}
      >
        <thead className="table-light sticky-top">
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                style={{
                  width: col.toLowerCase() === "id" ? "120px" : "200px",
                  whiteSpace: "nowrap",
                }}
                className="text-capitalize"
              >
                {col.replaceAll("_", " ")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td
                  key={col}
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  title={String(row[col])} // tooltip on hover
                >
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