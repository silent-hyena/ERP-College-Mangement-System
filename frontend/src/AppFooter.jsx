import { Link } from "react-router-dom";

function Footer() {
    return (<>

        <footer className="footer-style pt-4 bg-light pb-2 mt-4">
            <div className="container">
                <div className="row">

                    {/* Address*/}
                    <div className="col-md-4 mb-2">
                        <h5 className="fw-bold p-2">Address</h5>
                        <p className="m-0">Punjab Engineering College.</p>
                        <p className="m-0">Sector-12</p>
                        <p className="m-0">Chandigarh(160012)</p>
                    </div>



                    {/* Contact */}
                    <div className="col-md-4 mb-2">
                        <h5 className="fw-bold p-2">Contact</h5>
                        <p className="m-0">Email: info@mycollege.edu</p>
                        <p className="m-0">Phone1: +91 9876543210</p>
                        <p className="m-0">Phone2: +91 8823232982</p>

                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-2">
                        <h5 className="fw-bold p-2">Quick Links</h5>
                        <ul className="nav p-0  flex-column">
                            <li className="nav-item p-0 ">
                                <Link className="nav-link p-0 " to="/feeStructure">
                                    Fee Structure
                                </Link>
                            </li>
                            <li className="nav-item p-0 ">
                                <Link className="nav-link p-0 " to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item p-0 ">
                                <Link className="nav-link p-0 " to="/">
                                    Academic Calendar
                                </Link>
                            </li>
                            <li className="nav-item p-0">
                                <Link className="nav-link p-0" to="/newAdmission">
                                    Admissions
                                </Link>
                            </li>
                            
                        </ul>
                    </div>


                    {/* Social */}
                    {/* <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Follow Us</h6>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div> */}
                </div>

                {/* Copywrite bar */}
                <hr className="border-light" />
                <div className="text-center">
                    <small>© 2025 Student Management System. All rights reserved.</small>
                </div>
            </div>
        </footer>
    </>)
}
export default Footer;