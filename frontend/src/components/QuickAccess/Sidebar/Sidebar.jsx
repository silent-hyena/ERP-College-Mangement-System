import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaMoneyBillWave,
  FaWpforms,
  FaClipboardCheck,
  FaCreditCard,
} from "react-icons/fa"; // Font Awesome icons

const Sidebar = ({ handleFormCheck, handleFormBtn, handlePaymentBtn }) => {
  
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <div className="sidebar">
      {/* SIDEBAR */}
      <div className="sidebar-text-style  d-flex m-1">
        <nav className="vh-100 flex-column pt-4">
          <ul className=" fs-6 nav nav-pills flex-column ">
            <Link
              className="mt-3 rounded-pill sidebar-btn d-flex align-items-center gap-2"
              to="/"
            >
              <FaHome />
              Home
            </Link>

            <Link
              className="mt-3 rounded-pill sidebar-btn d-flex align-items-center gap-2"
              to="/studentLogin"
            >
              <FaUserGraduate />
              Student Login
            </Link>

            <Link
              className="mt-3  rounded-pill sidebar-btn d-flex align-items-center gap-2"
              to="/feeStructure"
            >
              {" "}
              <FaMoneyBillWave />
              Fee Structure
            </Link>
          </ul>
          <button
            className={`mt-3 rounded-pill  sidebar-btn d-flex align-items-center gap-2 ${activeComponent == "CheckApplication" ? "active" : ""}`}
            onClick={() => {
              (setActiveComponent("CheckApplication"), handleFormCheck());
            }}
          >
            <FaClipboardCheck />
            Check Application Status
          </button>

          <button
                      className={`mt-3 rounded-pill  sidebar-btn d-flex align-items-center gap-2 ${activeComponent == "AdmissionForm" ? "active" : ""}`}

            onClick={() => {
              (setActiveComponent("AdmissionForm"), handleFormBtn());
            }}
          >
            <FaWpforms />
            Fill Admission Form
          </button>

          <button
            className={`mt-3 rounded-pill  sidebar-btn d-flex align-items-center gap-2 ${activeComponent == "AdmissionFees" ? "active" : ""}`}

            onClick={() => {
              setActiveComponent("AdmissionFees"); handlePaymentBtn();
            }}
          >
            <FaCreditCard />
            Pay Admission Fees
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
