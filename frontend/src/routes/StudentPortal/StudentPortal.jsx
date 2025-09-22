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

import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/AppFooter.jsx";
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
    switch(activeSection) {
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
        
        <div className="sidebar-text-style bg-light d-flex">
          <nav
            className="vh-100 flex-column border-end border-3 pt-4"
            style={{ width: "210px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}
          >
            <ul className="fs-6 nav nav-pills flex-column">
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("home")}
                >
                  <FaHome /> Home
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("feeStructure")}
                >
                  <FaFileInvoiceDollar /> Fee Structure
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("feePayment")}
                >
                  <FaMoneyCheckAlt /> Fee Payment
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("courseRegistration")}
                >
                  <FaBookOpen /> Course Registration
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("gradeReport")}
                >
                  <FaChartLine /> Grade Report
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("feeReceipt")}
                >
                  <FaReceipt /> Fee Receipt
                </button>
              </li>
              <li className="nav-item ms-3 mb-2">
                <button 
                  className="nav-link d-flex align-items-center gap-2"
                  onClick={() => setActiveSection("feedback")}
                >
                  <FaCommentAlt /> Feedback
                </button>
              </li>
            </ul>
          </nav>

          
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
