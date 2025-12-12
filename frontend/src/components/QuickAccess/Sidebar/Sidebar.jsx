import './sidebar.css'
import { Link } from "react-router-dom";
import { FaHome, FaUserGraduate, FaMoneyBillWave, FaWpforms,FaClipboardCheck, FaCreditCard } from "react-icons/fa"; // Font Awesome icons
const Sidebar = ({ handleFormCheck, handleFormBtn, handlePaymentBtn }) => {
  return (
    <div className='sidebar'>
        {/* SIDEBAR */}
                <div className="sidebar-text-style  d-flex m-1">

                    <nav className="vh-100 flex-column pt-4">

                        <ul className=" fs-6 nav nav-pills flex-column ">
                                <Link className="mt-3 sidebar-btn d-flex align-items-center gap-2" to="/"><FaHome/>Home</Link>
                            
                                <Link className="mt-3 sidebar-btn d-flex align-items-center gap-2" to="/studentLogin"><FaUserGraduate/>Student Login</Link>
                            
                                <Link className="mt-3 sidebar-btn d-flex align-items-center gap-2" to="/feeStructure"> < FaMoneyBillWave/>Fee Structure</Link>
                        </ul>
                        <button className="mt-3  sidebar-btn d-flex align-items-center gap-2" onClick={handleFormCheck} ><FaClipboardCheck/>Check Application Status</button>

                        <button className="mt-3 sidebar-btn d-flex align-items-center gap-2" onClick={handleFormBtn} ><FaWpforms/>Fill Admission Form</button>

                        <button className="mt-3  sidebar-btn d-flex align-items-center gap-2" onClick={handlePaymentBtn} ><FaCreditCard/>Pay Admission Fees</button>

                    </nav>
                </div>
    </div>
  )
}

export default Sidebar