import React from "react";
import "./performance.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

// Colors
const COLORS = ["#1565C0", "#90CAF9", "#42A5F5", "#0D47A1"];

function Performance() {
  // Data for placement pie chart
  const placementData = [
    { name: "Placed", value: 92 },
    { name: "Not Placed", value: 8 },
  ];

  // Data for faculties & departments bar chart
  const facultyDeptData = [
    { name: "Faculties", value: 250 },
    { name: "Departments", value: 12 },
  ];

  // Progress-like data for total students
  const studentStats = { total: 5000, max: 6000 }; // example target

  return (
    <div className="performance-section">
      <h2 className="performance-title">College Statistics</h2>

      <div className="performance-grid">
        {/* Pie Chart - Placement Performance */}
        <div className="chart-card">
          <h3 className="chart-title">Placement Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={placementData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {placementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Faculties & Departments */}
        <div className="chart-card">
          <h3 className="chart-title">Faculties & Departments</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={facultyDeptData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#1565C0" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Progress Bar - Total Students */}
        <div className="chart-card">
          <h3 className="chart-title">Total Students</h3>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${(studentStats.total / studentStats.max) * 100}%` }}
            >
              {studentStats.total}
            </div>
          </div>
          <p className="progress-desc">Out of {studentStats.max} capacity</p>
        </div>
      </div>
    </div>
  );
}

export default Performance;
