// import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar.jsx"
import FormLogin from "../AdmissionForm/AdmissionForm.jsx"
import ApplicationFormCheck from "../ApplicationStatus/AdmissionStatus.jsx"
import RazorpayPayment from "../RazorpayPayment/Razorpay.jsx"
import Footer from "../../components/Footer/AppFooter";

import Sidebar from "../../components/QuickAccess/Sidebar/Sidebar.jsx"
// import StudentPortal from "./StudentPortal.jsx"
import AdminPage from "../AdminPage/AdminPage.jsx"

function NewAdmission() {
    const [showAdmissionform, setShowAdmissionForm] = useState(true)
    const [showpayment, setShowPayment] = useState(false);
    const [showApplcationStatus, setApplicationStatus] = useState(false)
    // const [showPaymentForm, setPaymentForm] = useState(false)
    // const [alert, setAlert] = useState(false)
    // const [alertMessage, setAlertMessage] = useState(null)

    // const { register, handleSubmit, formState: { errors } } = useForm();

    function handleFormBtn() {
        setShowAdmissionForm(true);
        setShowPayment(false);
        setApplicationStatus(false);
    }

    function handlePaymentBtn() {
        setShowAdmissionForm(false);
        setShowPayment(true);
        setApplicationStatus(false);
        // window.location.href = "..Frontend/razorpay.html";

    }
    function handleFormCheck() {
        setApplicationStatus(true);
        setShowAdmissionForm(false);
        setShowPayment(false);
    }




    return (
        <>

            <Navbar />

            {/* {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />} */}
           

            <div className="d-flex" style={{"backgroundColor": "rgb(240, 241, 242)"}}>
                    <div className="sidebar-wrapper">
                        <Sidebar
                            handleFormBtn={handleFormBtn}
                            handlePaymentBtn={handlePaymentBtn}
                            handleFormCheck={handleFormCheck}
                        />
                    </div>

                    <div className="flex-grow-1 container-fluid">
                        {showAdmissionform && <FormLogin />}
                        {showpayment && <RazorpayPayment />}
                        {showApplcationStatus && <ApplicationFormCheck />}
                    </div>
             </div>
            <Footer />

        </>
    )
}
export default NewAdmission