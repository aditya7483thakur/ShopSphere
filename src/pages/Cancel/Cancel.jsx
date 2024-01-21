import React from "react";
import "./Cancel.css";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container">
      <div className="box">
        <h2 className="heading">Payment Canceled</h2>
        <p className="message">
          We're sorry, but your payment was canceled. Please check your payment
          details and try again.
        </p>
        <button className="button">
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            Go to Shop
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cancel;
