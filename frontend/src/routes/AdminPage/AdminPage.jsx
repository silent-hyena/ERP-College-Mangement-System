import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/AppFooter";
import { Link } from "react-router-dom";
import EmailForm from "../../MailBox";
import DatbaseTables from "./DatabaseCards";
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
    const [activeComponent, setActiveComponent] = useState("EmailBox");

    const renderComponent = () => {
        switch (activeComponent) {
            case "EmailBox":
                return <EmailForm />;
            case "Tables":
                return <DatbaseTables />;
            default:
                return <EmailForm />;
        }
    };

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {/* Flex container to keep sidebar and content side by side */}
                <div className="sidebar2">
                    {/* SIDEBAR */}
                    <div className="sidebar-text-style bg-light d-flex">
                        <nav className="vh-100 flex-column ps-2 pt-2">
                            <ul className="fs-6 nav nav-pills flex-column">
                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/">
                                    <FaUsers className="w-25" /> User Management & Roles
                                </Link>

                                {/* <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/">
                                    <FaBullhorn className="w-25" /> Notices & Announcements
                                </Link> */}

                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/communication">
                                    <FaEnvelopeOpenText /> Communication
                                </Link>

                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/courses">
                                    <FaBookOpen /> Course & Curriculum
                                </Link>

                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/payments">
                                    <FaFileInvoiceDollar /> Payment Reports
                                </Link>

                                {/* <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/backup">
                                    <FaDatabase /> Backup & Restore
                                </Link> */}

                                <Link className="mt-3 sidebar2-btn d-flex align-items-center gap-2" to="/settings">
                                    <FaCog /> Settings
                                </Link>
                            </ul>
                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("Tables")}>
                                <FaDatabase /> Database & Tables
                            </button>
                            <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={() => setActiveComponent("EmailBox")}>
                                <FaBullhorn className="w-25" /> Notices & Announcements
                            </button>
                        </nav>
                    </div>

                    {/* EMAIL FORM */}
                    <div className="flex-grow-1 p-4">
                        {renderComponent()}
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default AdminPage;
