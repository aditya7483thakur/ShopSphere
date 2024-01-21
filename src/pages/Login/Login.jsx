import React, { useContext, useRef } from "react";
import "./Login.css";
import { server } from "../../App";
import { UserContext } from "../../store/User-context";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const handleLogin = async () => {
    toast.loading("Loggin In..");
    try {
      const response = await fetch(`${server}/users/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });

      const json = await response.json();

      toast.dismiss();
      if (json.success) {
        setIsAuthenticated(true);
        toast.success(json.message);
      } else {
        setIsAuthenticated(false);
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("Some error occured !");
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hey User !</strong> Backend part of this website is deployed on
        a free server , so it might take 10-15 seconds to register or login.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div className="main-div">
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
            <center style={{ paddingTop: "15px" }}>
              Create Account ? <Link to="/register">Register</Link>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
