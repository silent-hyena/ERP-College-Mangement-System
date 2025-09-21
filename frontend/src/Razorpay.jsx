export default async function openRazorpay(amount, student) {
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

  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return "Razorpay SDK failed to load.";
  }

  try {
    const response = await fetch(
      "/makepayment/create-order",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount, currency: "INR" }),
        credentials: "include",
      }
    );

    const order = await response.json();

    if (order.alert) {
      return order.alert;
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
          name: student?.name || "Student Name",
          email: student?.email || "student@example.com",
          contact: student?.contact || "9999999999",
        },
        theme: { color: "#89CFF3" },
        handler: async function (response) {
          try {
            const verifyRes = await fetch(
              "/makepayment/verify-payment",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
                credentials: "include",
              }
            );

            const data = await verifyRes.json();
            if (data.status === "ok") {
              resolve("Payment successful!");
            } else {
              resolve("Payment verification failed.");
            }
          } catch (err) {
            console.error("Payment verification error:", err);
            resolve("Error verifying payment.");
          }
        },
        modal: {
          ondismiss: () => {
            resolve("Payment cancelled by user.");
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  } catch (err) {
    console.error("Error creating order:", err);
    return "Failed to initiate payment.";
  }
}
