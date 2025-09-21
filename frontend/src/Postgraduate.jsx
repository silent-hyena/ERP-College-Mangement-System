import React from "react";
import "./Postgraduate.css";

const PostgraduatePrograms = () => {
  const programs = [
    {
      name: "M.Sc. Computer Science",
      duration: "2 Years",
      description:
        "Advanced studies in computer science including artificial intelligence, machine learning, and high-performance computing.",
      highlights: ["AI & ML Specializations", "Research Projects", "Industry Collaborations"],
    },
    {
      name: "M.A. English Literature",
      duration: "2 Years",
      description:
        "Focuses on literary theory, comparative literature, and advanced research in English studies.",
      highlights: ["Research Thesis", "Seminars & Conferences", "Global Literary Studies"],
    },
    {
      name: "MBA (Master of Business Administration)",
      duration: "2 Years",
      description:
        "Covers advanced management, finance, marketing, and entrepreneurship with case-based learning.",
      highlights: ["Industry Internships", "Startup Incubation", "Global Business Exposure"],
    },
    {
      name: "M.Sc. Biotechnology",
      duration: "2 Years",
      description:
        "Specialized in molecular biology, bioinformatics, and advanced lab techniques for research and industry.",
      highlights: ["State-of-the-Art Labs", "Research Publications", "Industry Partnerships"],
    },
  ];

  return (
    <div className="pg-container">
      <h1 className="pg-title">Postgraduate Programs</h1>
      <p className="pg-intro">
        Our postgraduate programs are tailored for students who wish to pursue 
        advanced knowledge, research opportunities, and professional excellence. 
        These programs prepare graduates for leadership roles, innovation, and 
        higher academic pursuits such as doctoral studies.
      </p>

      <div className="pg-grid">
        {programs.map((program, index) => (
          <div key={index} className="pg-card">
            <h2 className="pg-card-title">{program.name}</h2>
            <p className="pg-duration">{program.duration}</p>
            <p className="pg-description">{program.description}</p>
            <ul className="pg-highlights">
              {program.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostgraduatePrograms;
