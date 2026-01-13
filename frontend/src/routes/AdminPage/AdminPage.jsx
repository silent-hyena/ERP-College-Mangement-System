import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/AppFooter";
import { Link } from "react-router-dom";
import EmailForm from "../../MailBox";
import DatbaseTables from "./DatabaseCards";
import AddEvent from "./EventManger";
import GetDataBaseTable from "./GetDataBaseTable";
import AdminIntro from "./AdminIntro";
import { useState } from "react";


import {
    FaUsers,
    FaBullhorn,
    FaEnvelopeOpenText,
    FaBookOpen,
    FaFileInvoiceDollar,
    FaDatabase,
    FaCog
} from "react-icons/fa";

function AdminPage() {
    const [activeComponent, setActiveComponent] = useState("");




    const renderComponent = () => {
        switch (activeComponent) {
            case "EmailBox":
                return <EmailForm />;
            case "Tables":
                return <DatbaseTables />;
            case "Event":
                return <AddEvent />
            case "StaffTable":
                return <GetDataBaseTable tableName="staff" />
            case "CourseTable":
                return <GetDataBaseTable tableName="course" />
            case "TransactionTable":
                return <GetDataBaseTable tableName="transactions" />
            default:
                return <AdminIntro />;
        }
    };

    return (
        <>
            <Navbar />
            <div className="d-flex">
                {/* Flex container to keep sidebar and content side by side */}
                <div className="sidebar2"
                    style={{
                        width: "210px",     // fixed width
                        flexShrink: 0
                    }}>
                    {/* SIDEBAR */}
                    <div className="sidebar-text-style bg-light d-flex">
                        <nav className="vh-100 flex-column ps-2 pe-2 pt-2">
                            {/* <ul className="fs-6 nav nav-pills flex-column">
                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/settings">
                                    <FaCog /> Settings
                                </Link>
                            </ul> */}
                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("Tables")}>
                                <FaDatabase className="w-20" /> Database & Tables
                            </button>
                            <button className="mt-3 sidebar-btn d-flex align-items-center  gap-2" onClick={() => setActiveComponent("Event")}>
                                <FaBullhorn className="w-22" /> Notices & Announcements
                            </button>

                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("EmailBox")}>
                                <FaEnvelopeOpenText className="w-22" /> Communication
                            </button>

                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("StaffTable")}>
                                <FaUsers className="w-22" /> User Management
                            </button>

                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("CourseTable")}>
                                <FaBookOpen className="w-22" />  Course & Curriculum
                            </button>

                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("TransactionTable")}>
                                <FaFileInvoiceDollar className="w-22" /> Payment Report
                            </button>


                        </nav>
                    </div>


                </div>

                <div
                    className="flex-grow-1 p-4"
                    style={{
                        minWidth: 0,          //  allows flex child to shrink
                        overflow: "hidden"    //  isolates scrolling
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            overflowX: "auto"   // scroll ONLY here
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
