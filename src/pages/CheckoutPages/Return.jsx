import React, { useState, useEffect, useContext } from "react";
import { server } from "../../App";
import { Link, Navigate } from "react-router-dom";
import "./Return.css";
import { CartContext } from "../../store/CartStore-context";

const Return = () => {
  const [status, setStatus] = useState(null);
  const { emptyCart } = useContext(CartContext);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`${server}/users/session-status?session_id=${sessionId}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
      });
  }, []);

  // if (status === "open") {
  //   return <Navigate to="/check" />;
  // }

  // if (status === "complete") {
  return (
    <div className="successs-container">
      <div className="success-box">
        <h2 className="success-heading">Payment Successful</h2>
        <p className="success-message">
          Congratulations! Your payment was successful. Thank you for shopping
          with us!
        </p>
        <button className="success-button">
          <Link to={"/"} className="success-button-link">
            Go to Shop
          </Link>
        </button>
        <button className="clear-cart-button" onClick={emptyCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

// return null;
// };

export default Return;
