import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,

  FaReceipt,
  FaMoneyCheckAlt,
  FaBookOpen,
  FaChartLine,
  FaFileInvoiceDollar,
  FaCommentAlt,

} from "react-icons/fa";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/AppFooter.jsx";
import RazorpayPayment from "../RazorpayPayment/Razorpay.jsx";
import CourseTable from "./GradeReportTable.jsx";
import TopProgressBar from "../../components/ProgessBar/ProgressBar.jsx";
import downloadGradeReport from "./DownloadGradeReport.jsx";



const FeeStructure = () => <div>Fee Structure Details</div>;

const CourseRegistration = () => <div>Course Registration Section</div>;

const FeeReceipt = () => <div>Fee Receipt Section</div>;
const Feedback = () => <div>Feedback Section</div>;

function StudentPortal() {
  // State to track current content
  const [activeSection, setActiveSection] = useState("home");
  const [gradeData, setGradeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);


  const Home = () => (
    <div
      className="card shadow rounded bg-white p-4"
      // style={{ maxWidth: "1000px" }}
    >
      <h4 className="mb-3">Profile Overview</h4>
      <table className="table table-bordered">
        <tbody>
          {Object.entries(profile).reduce((rows, entry, index, array) => {
            if (index % 2 === 0) {
              const next = array[index + 1];
              rows.push(
                <tr key={index}>
                  <th>{entry[0]}</th>
                  <td>{String(entry[1])}</td>
                  {next ? (
                    <>
                      <th>{next[0]}</th>
                      <td>{String(next[1])}</td>
                    </>
                  ) : (
                    <>
                      <th></th>
                      <td></td>
                    </>
                  )}
                </tr>
              );
            }
            return rows;
          }, [])}
        </tbody>
      </table>
    </div>
  );


  async function handleGradeBtn() {
    
    setLoading(true);
    const response = await fetch("/student/gradereport",
      {
        method: "GET",
        credentials: "include"
      }
    );
    const data = await response.json(); 
    if (data.message) {
      console.log(data.message)
      setGradeData(data.message);
    }
    setLoading(false);
    return;
  }

  const getProfile = async () => {
    try {
      const response = await fetch("/student/studentprofile", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();

      if (data.SID) {
        setProfile(data);

      } else {
        console.warn("Failed to fetch profile:", data);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  async function handleGradeReprtDownload() {
    downloadGradeReport(gradeData, "grade_report")


  }



  // Function to render content based on activeSection
  const renderContent = () => {
    switch (activeSection) {
      case "home": return <Home />;
      case "feeStructure": return <FeeStructure />;
      case "feePayment": return <RazorpayPayment />;
      case "courseRegistration": return <CourseRegistration />;
      case "gradeReport": return <>
        <CourseTable data={gradeData.slice(1)} />
        <button type="button" className="btn btn-primary" onClick={() => handleGradeReprtDownload()}>
          Download Grade Report
        </button>

      </>;
      case "feeReceipt": return <FeeReceipt />;
      case "feedback": return <Feedback />;
      default: return <Home />;
    }
  }

  return (
    <><TopProgressBar loading={loading} />;
      <Navbar />

      <div className="d-flex">
        {/* SIDEBAR */}

        <div className="sidebar2">
          <div className="sidebar-text-style bg-light d-flex">
            <nav
              className="vh-100 flex-column ps-2 pt-2 ps-2 pe-2"
              style={{ width: "210px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}
            >


              <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/feeStructure">
                <FaFileInvoiceDollar />Fee Structure
              </Link>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("feePayment")}
              >
                <FaMoneyCheckAlt /> Fee Payment
              </button>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("courseRegistration")}
              >
                <FaBookOpen /> Course Registration
              </button>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => { handleGradeBtn(), setActiveSection("gradeReport") }}
              >
                <FaChartLine /> Grade Report
              </button>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("feeReceipt")}
              >
                <FaReceipt /> Fee Receipt
              </button>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("feedback")}
              >
                <FaCommentAlt /> Feedback
              </button>

            </nav>


          </div>
        </div>
        {/* CONTENT AREA */}
        <div className="container-fluid p-4">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudentPortal;
