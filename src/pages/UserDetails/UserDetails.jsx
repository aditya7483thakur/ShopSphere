import React, { useContext } from "react";
import "./UserDetails.css"; // Import the CSS file
import { UserContext } from "../../store/User-context";
import { server } from "../../App";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const UserDetails = () => {
  const { user, isAuthenticated, setIsAuthenticated } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${server}/users/logout`, {
        method: "GET",
        credentials: "include",
      });

      const json = await response.json();

      if (json.success) {
        toast.success(json.message);
        setIsAuthenticated(false);
      } else {
        toast.success("Some Error Occured !");
      }
    } catch (error) {
      toast.success("Some Error Occured !");
    }
  };

  if (!isAuthenticated) return <Navigate to={"/login"} />;

  return (
    <div className="user-details-container">
      <h1 className="user-details">User Details</h1>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserDetails;
