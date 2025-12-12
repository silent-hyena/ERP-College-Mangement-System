import React from "react";
import "./AdmissionIntro.css";

const AdmissionIntro = ({ onStart }) => {
    return (
        <div className="admission-intro-container">
            <div className="admission-intro-card">
                <h2 className="intro-title">Admission Portal</h2>
                <p className="intro-desc">
                    This portal allows new applicants to apply for admission, upload academic documents,
                    make online fee payment, and later track their application status.
                </p>

                <h3 className="intro-subtitle">Admission Flow</h3>
                <div className="intro-steps">
                    <ul>Submit your application for the undergraduate B.Tech program through
                        our official application portal.</ul>
                    <hr></hr>
                    <ul>Upon successful submission, applicants will receive a confirmation email containing their
                        unique application number for all future correspondence.
                    </ul>
                    <hr></hr>
                    <ul>Applicants may track the real-time status of their application using the application number
                        provided at the time of registration.</ul>
                    <hr></hr>
                    <ul>

                        After receiving the admission confirmation email with further instructions,
                        candidates can proceed to make a secure fee payment directly through the platform.</ul>
                    <hr></hr>
                </div>

                <button className="start-btn" onClick={onStart}>
                    Start Application
                </button>
            </div>
        </div>
    );
};

export default AdmissionIntro;
