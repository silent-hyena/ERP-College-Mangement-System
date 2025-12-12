import React from "react";
import "./Performance.css";

const stats = [
  { title: "Faculty", value: "1000+" },
  { title: "Students", value: "7500+" },
  { title: "Publications", value: "3,500+" },
  { title: "Patents", value: "450+" },
  { title: "Projects", value: "2,800+" },
];

export default function Performance() {
  return (<div className="performance-container" >
        <h3 className="performance-title text-center mb-5 fw-bold" style={{color:"#0d47a1"}}>Some Statistics</h3>
        <div className="stats-container">
          
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <h3 className="stats-title">{item.title}</h3>
              <p className="stats-value">{item.value}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

