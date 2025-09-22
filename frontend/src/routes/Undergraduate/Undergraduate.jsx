import React from "react";
import "./Undergraduate.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Components/Footer/AppFooter";

const UndergraduatePrograms = () => {
  const programs = [
    {
      name: "B.Sc. Computer Science",
      duration: "3 Years",
      description:
        "Focuses on programming, algorithms, data structures, and software development with strong practical exposure.",
      highlights: ["Coding Labs", "AI & ML Electives", "Industry Internships"],
    },
    {
      name: "B.A. Economics",
      duration: "3 Years",
      description:
        "Provides in-depth understanding of microeconomics, macroeconomics, and econometrics with policy applications.",
      highlights: ["Research Projects", "Data Analysis Training", "Seminars"],
    },
    {
      name: "B.Com. Accounting & Finance",
      duration: "3 Years",
      description:
        "Covers core accounting, taxation, financial management, and corporate governance for commerce professionals.",
      highlights: ["CA Coaching", "Industry Workshops", "Banking Exposure"],
    },
    {
      name: "B.Sc. Biotechnology",
      duration: "3 Years",
      description:
        "Explores genetic engineering, microbiology, and bioinformatics with hands-on lab training.",
      highlights: ["Modern Labs", "Research Support", "Industry Collaborations"],
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="ug-container">
      <h1 className="ug-title">Undergraduate Programs</h1>
      <p className="ug-intro">
        Our undergraduate programs are designed to provide students with a
        strong academic foundation, practical exposure, and opportunities for
        innovation and research. Explore our diverse range of programs that
        prepare students for successful careers and higher studies.
      </p>

      <div className="ug-grid">
        {programs.map((program, index) => (
          <div key={index} className="ug-card">
            <h2 className="ug-card-title">{program.name}</h2>
            <p className="ug-duration">{program.duration}</p>
            <p className="ug-description">{program.description}</p>
            <ul className="ug-highlights">
              {program.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UndergraduatePrograms;
