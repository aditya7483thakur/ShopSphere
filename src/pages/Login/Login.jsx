import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleLogin = () => {
    // Add your login logic here
    console.log(
      "Logging in with:",
      email.current.value,
      password.current.value
    );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Email:</label>
        <input type="text" id="username" ref={email} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={password} />

        <button type="button" className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
