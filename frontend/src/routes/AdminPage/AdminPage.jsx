import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/AppFooter";
import { Link } from "react-router-dom";
import EmailForm from "../../MailBox";
import DatbaseTables from "./DatabaseCards";
import AddEvent from "./EventManger";
import GetDataBaseTable from "./GetDataBaseTable";
import AdminIntro from "./AdminIntro";
import ServiceManager from "./ServiceManager";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout from "../../logoutUtil";
import AutoDismissAlert from "../../AutoDismissedAlert";

import {
  FaUsers,
  FaBullhorn,
  FaEnvelopeOpenText,
  FaBookOpen,
  FaFileInvoiceDollar,
  FaDatabase,
  FaSlidersH,
  FaCogs,
  FaSignOutAlt 
} from "react-icons/fa";


function AdminPage() {
  const [activeComponent, setActiveComponent] = useState("");
  const [alert, setAlert]  = useState(null);
  const navigate = useNavigate();


  async function handleLogout() {
    const res = await logout();
    if(res === true){
      navigate("/")
    }
    else{
      setAlert(res)
    }

    
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "EmailBox":
        return <EmailForm />;
      case "Tables":
        return <DatbaseTables />;
      case "Event":
        return <AddEvent />;
      case "StaffTable":
        return <GetDataBaseTable tableName="staff" />;
      case "CourseTable":
        return <GetDataBaseTable tableName="course" />;
      case "TransactionTable":
        return <GetDataBaseTable tableName="transactions" />;
      case "Services":
        return <ServiceManager />;
      default:
        return <AdminIntro />;
    }
  };

  return (
    <>      
    {alert && <AutoDismissAlert message={alert} type="failure" onClose={()=>setAlert(null)}/>}

      <Navbar />
      <div
              className=" d-flex align-items-center justify-content-between px-3"
              style={{ height: "50px", backgroundColor: "#90CAF9" }}
            >
              <button
                className="btn btn-outline-light btn-sm fw-semibold
                   d-flex align-items-center justify-content-between"
                style={{ width: "90px" }}
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
      </div>
      <div className="d-flex" style={{ backgroundColor: "rgba(249, 252, 255, 1)" }}>
        {/* Flex container to keep sidebar and content side by side */}
        <div
          className="sidebar2"
          style={{
            width: "190px", // fixed width
            flexShrink: 0,
          }}
        >
          {/* SIDEBAR */}
          <div className="sidebar-text-style d-flex">
            <nav
              className="vh-100 flex-column ps-1 pe-0 pt-2"
              style={{ fontSize: "13px" }}
            >
              {/* <ul className="fs-6 nav nav-pills flex-column">
                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/settings">
                                    <FaCog /> Settings
                                </Link>
                            </ul> */}
              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "Tables" ? "active" : ""}`}
                onClick={() => setActiveComponent("Tables")}
              >
                <FaDatabase className="w-20" /> Database & Tables
              </button>
              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "Event" ? "active" : ""}`}
                onClick={() => setActiveComponent("Event")}
              >
                <FaBullhorn className="w-22" /> Manage Events
              </button>

              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "EmailBox" ? "active" : ""}`}
                onClick={() => setActiveComponent("EmailBox")}
              >
                <FaEnvelopeOpenText className="w-22" /> Communication
              </button>

              <button
                className={`mt-3 sidebar-btn rounded-pill d-flex align-items-center gap-2 ${activeComponent == "StaffTable" ? "active" : ""}`}
                onClick={() => setActiveComponent("StaffTable")}
              >
                <FaUsers className="w-22" /> User Management
              </button>

              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "CourseTable" ? "active" : ""}`}
                onClick={() => setActiveComponent("CourseTable")}
              >
                <FaBookOpen className="w-22" /> Course & Curriculum
              </button>

              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "TransactionTable" ? "active" : ""}`}
                onClick={() => setActiveComponent("TransactionTable")}
              >
                <FaFileInvoiceDollar className="w-22" /> Payment Report
              </button>

              <button
                className={`mt-3 sidebar-btn rounded-pill  d-flex align-items-center gap-2 ${activeComponent == "Services" ? "active" : ""}`}
                onClick={() => setActiveComponent("Services")}
              >
                <FaSlidersH className="w-20" />
                Manage Services
              </button>
            </nav>
          </div>
        </div>

        <div
          className="flex-grow-1 p-0"
          style={{
            minWidth: 0, //  allows flex child to shrink
            overflow: "hidden", //  isolates scrolling
          }}
        >
          <div
            style={{
              width: "100%",
              overflowX: "auto", // scroll ONLY here
            }}
          >
            {renderComponent()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminPage;
