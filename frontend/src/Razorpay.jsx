// RazorpayPayment.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import AutoDismissAlert from "./AutoDismissedAlert"; // your alert component

export default function RazorpayPayment({ defaultStudent }) {
  const [alertMessage, setAlertMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultStudent || { name: "", amount: "" }
  });

  // Load Razorpay SDK
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-sdk")) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.id = "razorpay-sdk";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Open Razorpay checkout
  const openRazorpay = async (data) => {
    const res = await loadRazorpayScript();
    if (!res) {
      setAlertMessage("Razorpay SDK failed to load. Check your internet.");
      setShowAlert(true);
      return;
    }

    try {
      const response = await fetch("/makepayment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(data.amount), currency: "INR" }),
        credentials: "include",
      });

      const order = await response.json();
      if (order.alert) {
        setAlertMessage(order.alert);
        setShowAlert(true);
        return;
      }

      return new Promise((resolve) => {
        const options = {
          key: "rzp_test_zpN0zp46AZpzIA",
          amount: order.amount,
          currency: order.currency,
          name: "Student Management System",
          description: "Admission Payment",
          order_id: order.id,
          prefill: {
            name: data.name,
            email: data.email || "student@example.com",
            contact: data.contact || "9999999999",
          },
          theme: { color: "#89CFF3" },
          handler: async function (response) {
            try {
              const verifyRes = await fetch("/makepayment/verify-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
                credentials: "include",
              });

              const data = await verifyRes.json();
              if (data.status === "ok") {
                setAlertMessage("Payment successful!");
              } else {
                setAlertMessage("Payment verification failed.");
              }
            } catch (err) {
              console.error("Verification error:", err);
              setAlertMessage("Error verifying payment.");
            } finally {
              setShowAlert(true);
              resolve();
            }
          },
          modal: {
            ondismiss: () => {
              setAlertMessage("Payment cancelled by user.");
              setShowAlert(true);
              resolve();
            },
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
    } catch (err) {
      console.error("Error creating order:", err);
      setAlertMessage("Failed to initiate payment.");
      setShowAlert(true);
    }
  };

  const onSubmit = async (formData) => {
    await openRazorpay(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card bg-light shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
        <h2 className="text-center mb-4" style={{ color: "#4ea2c0ff" }}>Make Payment</h2>

        {showAlert && (
          <AutoDismissAlert message={alertMessage} onClose={() => setShowAlert(false)} />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Amount (INR)</label>
            <input
              type="number"
              className={`form-control ${errors.amount ? "is-invalid" : ""}`}
              placeholder="Enter amount"
              {...register("amount", { required: "Amount is required", min: 1 })}
            />
            {errors.amount && <div className="invalid-feedback">{errors.amount.message}</div>}
          </div>

          <button type="submit" className="btn w-100" style={{ backgroundColor: "#55b4da", color: "#fff" }}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
