// import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Navbar"
import FormLogin from "./AdmissionForm.jsx"
import ApplicationFormCheck from "./AdmissionStatus.jsx"
import openRazorpay from "./Razorpay"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaHome, FaUserGraduate, FaMoneyBillWave, FaWpforms,FaClipboardCheck, FaCreditCard } from "react-icons/fa"; // Font Awesome icons

import AutoDismissAlert from "./AutoDismissedAlert";


function NewAdmission() {
    const [showAdmissionform, setShowAdmissionForm] = useState(false)
    const [showpayment, setShowPayment] = useState(false);
    const [showApplcationStatus,setApplicationStatus] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();

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



    async function handlePaymentFormSubmit(data) {
        try {
            // console.log("Form data:", data);

            // Await the result of openRazorpay
            const response = await openRazorpay(Number(data.amount), {
                amount: data.amount,
                name: data.name,

            });

            // response will be string like "Payment successful!" or "Failed..."
            if (response) {
                setAlertMessage(response);
                setAlert(true);
            }
        } catch (err) {
            console.error("Payment error:", err);
            setAlertMessage("Something went wrong while processing payment.");
            setAlert(true);
        }
    }


    return (
        <>
            { }
            <Navbar />

            {alert && <AutoDismissAlert message={alertMessage} onClose={() => setAlert(false)} />}
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








                {/* form to enter payment detail */}
                {showpayment && (
                    <div className="light-dark container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                        <div className="card bg-light shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
                            <h2 className="text-center mb-4" style={{ color: "#4ea2c0ff" }}>
                                Make Payment
                            </h2>

                            <form onSubmit={handleSubmit(handlePaymentFormSubmit)}>
                                {/* Name Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                        placeholder="Enter your name"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name.message}</div>
                                    )}
                                </div>

                                {/* Amount Field */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Amount (INR)</label>
                                    <input
                                        type="number"
                                        className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                                        placeholder="Enter amount"
                                        {...register("amount", { required: "Amount is required", min: 1 })}
                                    />
                                    {errors.amount && (
                                        <div className="invalid-feedback">{errors.amount.message}</div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn   w-100" style={{ backgroundColor: "#55b4da" }}>
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* ADMISSION FORM */}
                {showAdmissionform && (
                    <div className="container-fluid">
                        <FormLogin />
                    </div>
                )}

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