import React from "react";
import "./AdmissionIntro.css";

const AdmissionIntro = ({ onStart }) => {
  return (
    <div className="admission-intro-container">
      <div className="admission-intro-card">
        <h2 className="intro-title">Admission Portal</h2>
        <p className="intro-desc">
          This portal allows new applicants to apply for admission, upload academic documents,
          make online fee payment, and later track their application status — all in one place.
        </p>

        <h3 className="intro-subtitle">Admission Flow</h3>
        <ul className="intro-steps">
          <li>Fill the online admission form with accurate details.</li>
          <li>Upload academic documents & identity proofs.</li>
          <li>Pay admission fee securely through Razorpay.</li>
          <li>Track your admission status through dashboard.</li>
        </ul>

        <button className="start-btn" onClick={onStart}>
          Start Application
        </button>
      </div>
    </div>
  );
};

export default AdmissionIntro;
