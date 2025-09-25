import { useState } from "react";
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


// Dummy components for content sections
const Home = () => <div>Welcome to Home</div>;
const FeeStructure = () => <div>Fee Structure Details</div>;

const CourseRegistration = () => <div>Course Registration Section</div>;
const GradeReport = () => <div>Grade Report Section</div>;
const FeeReceipt = () => <div>Fee Receipt Section</div>;
const Feedback = () => <div>Feedback Section</div>;

function StudentPortal() {
  // State to track current content
  const [activeSection, setActiveSection] = useState("home");

  // Function to render content based on activeSection
  const renderContent = () => {
    switch (activeSection) {
      case "home": return <Home />;
      case "feeStructure": return <FeeStructure />;
      case "feePayment": return <RazorpayPayment />;
      case "courseRegistration": return <CourseRegistration />;
      case "gradeReport": return <GradeReport />;
      case "feeReceipt": return <FeeReceipt />;
      case "feedback": return <Feedback />;
      default: return <Home />;
    }
  }

  return (
    <>
      <Navbar />
      <div className="d-flex">
        {/* SIDEBAR */}

        <div className="sidebar2">
          <div className="sidebar-text-style bg-light d-flex">
            <nav 
              className="vh-100 flex-column ps-2 pt-2 ps-2 pe-2"
              style={{ width: "210px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}
            >
              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("home")}
              >
                <FaHome /> Home
              </button>

              <button
                className="mt-3 sidebar-btn d-flex align-items-center gap-2"
                onClick={() => setActiveSection("feeStructure")}
              >
                <FaFileInvoiceDollar /> Fee Structure
              </button>

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
                onClick={() => setActiveSection("gradeReport")}
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
