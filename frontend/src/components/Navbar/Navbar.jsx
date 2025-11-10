import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import './Navbar.css';


function Navbar() {

    return (
        <>  
            <nav className="navbar navbar-expand-md shadow-sm  m-0">
                <div className="container-fluid">

                    <strong>

                        <Link className="navbar-brand" to="/home">
                            <FaHome size={28} className="mb-1 pe-1" /></Link>
                    </strong>



                    {/* Toggler (for mobile) */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto">

                            <li className="nav-item dropdown">
                                {/* <Link className="nav-link" to="/Admissions">Admissions</Link> */}
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Admissions</a>

                                <ul className="dropdown-menu dropdown-menu-end">

                                    <Link className="dropdown-item" to="/newAdmission">Apply For New Admission</Link>
                                    {/* <Link className="dropdown-item" to="/counselling">Counselling</Link> */}
                                    <Link className="dropdown-item" to="/feeStructure">Fee Strucure</Link>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Students</a>
                                {/* <Link className="nav-link" to="/Students">Students</Link> */}
                                <ul className="dropdown-menu dropdown-menu-end">

                                    <Link className="dropdown-item" to="/studentLogin">Student Login</Link>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Programmes</a>
                                {/* <Link className="nav-link" to="/Programmes">Programmes</Link> */}

                                <ul className="dropdown-menu dropdown-menu-end">
                                    <Link className="dropdown-item" to="/programmes/undergraduate">Undergradute</Link>
                                    <Link className="dropdown-item" to="/programmes/postgraduate">Postgradute</Link>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <Link className="nav-link" to="/Institute">Institute</Link> */}
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Institue</a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <Link className="dropdown-item" to="/institute/history">History</Link>

                                    
                                    <a
                                        className="dropdown-item"
                                        href="https://maps.app.goo.gl/5aSL4Hg6Gruxy42TA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Location
                                    </a>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                {/* <Link className="nav-link" to="/Faculty">Faculty</Link> */}
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Faculty</a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <Link className="dropdown-item" to="/staff/login">Staff Login</Link>
                                    



                                </ul>

                            </li>

                            <li className="nav-item dropdown" >
                                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful Link</a>
                                <ul className="dropdown-menu dropdown-menu-end">

                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                    <Link className="dropdown-item" to="/academicCalendar">Calendar</Link>
                                </ul>
                            </li>


                        </ul>


                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;