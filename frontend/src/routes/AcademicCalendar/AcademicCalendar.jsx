import React from "react";
import "./AcademicCalendar.css";
import Navbar from '../../components/Navbar/Navbar.jsx';

const AcademicCalendar = () => {
  return (
    <>  
      <Navbar />
    <div className="calendar-container">
      <h2 className="calendar-title">Academic Calendar - Current Semester</h2>
      <p className="calendar-intro">
        The following schedule provides important academic dates and events for
        Undergraduate and Postgraduate students.
      </p>

      <div className="calendar-section">
        <h3>Undergraduate Programs</h3>
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semester Start</td>
              <td>1st August 2025</td>
              <td>Classes commence</td>
            </tr>
            <tr>
              <td>Mid-Sem Exams</td>
              <td>15th – 20th September 2025</td>
              <td>Internal Assessment</td>
            </tr>
            <tr>
              <td>Festival Break</td>
              <td>10th – 14th October 2025</td>
              <td>Diwali Holidays</td>
            </tr>
            <tr>
              <td>End-Sem Exams</td>
              <td>5th – 20th December 2025</td>
              <td>Final Assessments</td>
            </tr>
            <tr>
              <td>Semester End</td>
              <td>22nd December 2025</td>
              <td>Winter Vacation begins</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="calendar-section">
        <h3>Postgraduate Programs</h3>
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semester Start</td>
              <td>5th August 2025</td>
              <td>Orientation + Classes commence</td>
            </tr>
            <tr>
              <td>Research Proposal Submission</td>
              <td>10th September 2025</td>
              <td>For Dissertation work</td>
            </tr>
            <tr>
              <td>Mid-Sem Seminars</td>
              <td>18th – 22nd September 2025</td>
              <td>Departmental Review</td>
            </tr>
            <tr>
              <td>Conference Participation</td>
              <td>25th – 28th October 2025</td>
              <td>Mandatory for 2nd-year PG</td>
            </tr>
            <tr>
              <td>End-Sem Exams</td>
              <td>10th – 22nd December 2025</td>
              <td>Final Assessments</td>
            </tr>
            <tr>
              <td>Semester End</td>
              <td>24th December 2025</td>
              <td>Winter Vacation begins</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</>

  );
};

export default AcademicCalendar;

