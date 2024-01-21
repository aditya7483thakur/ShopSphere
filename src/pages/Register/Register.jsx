import React, { useContext, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import { server } from "../../App";
import { UserContext } from "../../store/User-context";
import toast from "react-hot-toast";

const Register = () => {
  const { setIsAuthenticated, isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handleRegister = async () => {
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      password: passwordRef.current.value,
    };

    toast.loading("Creating Account...");
    try {
      const response = await fetch(`${server}/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const json = await response.json();

      toast.dismiss();
      if (json.success) {
        toast.success(json.message);
        setIsAuthenticated(true);
      } else {
        toast.error(json.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Some error occurred !");
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      {" "}
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Hey User !</strong> Backend part of this website is deployed on
        a free server , so it might take 10-15 seconds to register or login.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="register-input"
            ref={nameRef}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="register-input"
            ref={emailRef}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            className="register-input"
            ref={phoneNumberRef}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="register-input"
            ref={passwordRef}
          />

          <button type="button" className="register" onClick={handleRegister}>
            Register
          </button>

          <center style={{ paddingTop: "15px" }}>
            Already Registered ? <Link to="/login">Login</Link>
          </center>
        </form>
      </div>
    </>
  );
};

export default Register;
