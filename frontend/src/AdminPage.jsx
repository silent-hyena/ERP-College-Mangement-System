import Navbar from "./Navbar";
import Footer from "./AppFooter";
import { Link } from "react-router-dom";
import EmailForm from "./MailBox";
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
    return (
        <div className="container-fluid bg-light">
            <Navbar />

            {/* Flex container to keep sidebar and content side by side */}
            <div className="d-flex">

                {/* SIDEBAR */}
                <div className="sidebar-text-style bg-light">
                    <nav
                        className="vh-100 flex-column border-end border-3 pt-4"
                        style={{ width: "210px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}
                    >
                        <ul className="fs-6 nav nav-pills flex-column">

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/">
                                    <FaUsers className="w-25" /> User Management & Roles
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/">
                                    <FaBullhorn className="w-25" /> Notices & Announcements
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/communication">
                                    <FaEnvelopeOpenText /> Communication
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/courses">
                                    <FaBookOpen /> Course & Curriculum
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/payments">
                                    <FaFileInvoiceDollar /> Payment Reports
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/backup">
                                    <FaDatabase /> Backup & Restore
                                </Link>
                            </div>

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/settings">
                                    <FaCog /> Settings
                                </Link>
                            </div>

                        </ul>
                    </nav>
                </div>

                {/* EMAIL FORM */}
                <div className="flex-grow-1 p-4">
                    <EmailForm />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AdminPage;
