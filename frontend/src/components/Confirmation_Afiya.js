import React from "react";
import { Link } from "react-router-dom";

const ConfirmationAfiya = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎉 Order Confirmed! 🎉</h2>
      <p>Thank you for your order! You will receive an email confirmation shortly.</p>
      <Link to="/">
        <button className="btn btn-primary mt-3">Back to Home</button>
     </Link>

    </div>
  );
};

export default ConfirmationAfiya;
