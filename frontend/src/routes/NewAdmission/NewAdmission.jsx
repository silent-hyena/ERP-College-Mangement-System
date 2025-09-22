// import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar.jsx"
import FormLogin from "../AdmissionForm/AdmissionForm.jsx"
import ApplicationFormCheck from "../ApplicationStatus/AdmissionStatus.jsx"
import RazorpayPayment from "../RazorpayPayment/Razorpay.jsx"

import Sidebar from "../../components/Sidebar/Sidebar.jsx"
// import StudentPortal from "./StudentPortal.jsx"


function NewAdmission() {
    const [showAdmissionform, setShowAdmissionForm] = useState(true)
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


                <Sidebar
                    handleFormBtn={handleFormBtn}
                    handlePaymentBtn={handlePaymentBtn}
                    handleFormCheck={handleFormCheck}
                />


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