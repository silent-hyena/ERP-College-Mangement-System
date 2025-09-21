// import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Navbar"
import FormLogin from "./AdmissionForm.jsx"
import ApplicationFormCheck from "./AdmissionStatus.jsx"
import RazorpayPayment from "./Razorpay"


import { Link } from "react-router-dom";
import { FaHome, FaUserGraduate, FaMoneyBillWave, FaWpforms,FaClipboardCheck, FaCreditCard } from "react-icons/fa"; // Font Awesome icons
// import StudentPortal from "./StudentPortal.jsx"



function NewAdmission() {
    const [showAdmissionform, setShowAdmissionForm] = useState(false)
    const [showpayment, setShowPayment] = useState(false);
    const [showApplcationStatus,setApplicationStatus] = useState(false)
    // const [showPaymentForm, setPaymentForm] = useState(false)
    // const [alert, setAlert] = useState(false)
    // const [alertMessage, setAlertMessage] = useState(null)

    // const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormBtn() {
        setShowAdmissionForm(!showAdmissionform);
        setShowPayment(false);
        setApplicationStatus(false);
    }

    function handlePaymentBtn() {
        setShowAdmissionForm(false);
        setShowPayment(!showpayment);
        setApplicationStatus(false);
        // window.location.href = "..Frontend/razorpay.html";

    }
    function handleFormCheck(){
        setApplicationStatus(true);
        setShowAdmissionForm(false);
        setShowPayment(false);
    }




    return (
        <> 
            
            <Navbar />

            {/* {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />} */}
            <div className="d-flex">


                {/* SIDEBAR */}
                <div className="sidebar-text-style bg-light d-flex">

                    <nav className=" vh-100 flex-column border-end border-3 pt-4"
                        style={{ width: "210px", position: "sticky", top: 0, height: "100vh", overflowY: "auto" }}>




                        <ul className=" fs-6 nav nav-pills flex-column ">

                            <div className="nav-item ms-3 gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/"><FaHome/>Home</Link>
                            </div>
                            <div className="nav-item ms-3  gy-0">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/studentLogin"><FaUserGraduate/>Student Login</Link>
                            </div>
                            <div className="nav-item ms-3 ">
                                <Link className="nav-link d-flex align-items-center gap-2" to="/feeStructure"> < FaMoneyBillWave/>Fee Structure</Link>

                            </div>

                        </ul>
                        <button className="w-100 mt-3 ms-4 sidebar-btn d-flex align-items-center gap-2" onClick={handleFormCheck} style={{ backgroundColor: "#f8f9fa" }}><FaClipboardCheck/>Check Status</button>

                        <button className="w-100 mt-3 ms-4 sidebar-btn d-flex align-items-center gap-2" onClick={handleFormBtn} style={{ backgroundColor: "#f8f9fa" }}><FaWpforms/>Fill Admission Form</button>

                        <button className="w-100 mt-3 ms-4 sidebar-btn d-flex align-items-center gap-2" onClick={handlePaymentBtn} style={{ backgroundColor: "#f8f9fa" }}><FaCreditCard/>Make Payment</button>

                    </nav>
                </div>





                {/* ADMISSION FORM */}
                {showAdmissionform && (
                    <div className="container-fluid">
                        <FormLogin />
                    </div>
                )}

                {/* Paymengt Box */}
                {showpayment && 
                <div className="container-fluid">
                        <RazorpayPayment />
                    </div>}

                {/* Application status */}
                {showApplcationStatus && (
                    <div className="container-fluid">
                        <ApplicationFormCheck />
                    </div>
                )}

            </div>

        </>
    )
}
export default NewAdmission