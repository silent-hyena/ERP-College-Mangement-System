import React from "react";
import "./FeeStructure.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/AppFooter.jsx";
const FeeStructure = () => {
  const ugFees = [
    { category: "Tuition Fees (per year)", amount: "₹ 60,000" },
    { category: "Hostel Fees (per year)", amount: "₹ 35,000" },
    { category: "Library & Digital Access", amount: "₹ 3,000" },
    { category: "Laboratory Fees", amount: "₹ 5,000" },
    { category: "Examination Fees", amount: "₹ 2,000" },
  ];

  const pgFees = [
    { category: "Tuition Fees (per year)", amount: "₹ 80,000" },
    { category: "Hostel Fees (per year)", amount: "₹ 40,000" },
    { category: "Library & Digital Access", amount: "₹ 3,500" },
    { category: "Laboratory/Research Fees", amount: "₹ 7,000" },
    { category: "Examination Fees", amount: "₹ 2,500" },
  ];

  return (
    <>
    <Navbar/>
    <div className="fee-container">
      <h1 className="fee-title">Fee Structure</h1>
      <p className="fee-intro">
        The fee structure for Undergraduate and Postgraduate students includes
        academic fees, hostel charges, and service fees. Below is the detailed
        breakdown:
      </p>

      {/* Undergraduate Fees */}
      <div className="fee-section">
        <h2 className="fee-subtitle">Undergraduate Programs</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {ugFees.map((fee, index) => (
              <tr key={index}>
                <td>{fee.category}</td>
                <td>{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Postgraduate Fees */}
      <div className="fee-section">
        <h2 className="fee-subtitle">Postgraduate Programs</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {pgFees.map((fee, index) => (
              <tr key={index}>
                <td>{fee.category}</td>
                <td>{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FeeStructure;
