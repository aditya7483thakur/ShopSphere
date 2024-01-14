import React, { useRef } from "react";
import "./Register.css";

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handleRegister = () => {
    // Access input values using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;

    // Add your registration logic here
    console.log("Registering with:", name, email, phoneNumber, password);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="register-input" ref={nameRef} />

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
      </form>
    </div>
  );
};

export default Register;
