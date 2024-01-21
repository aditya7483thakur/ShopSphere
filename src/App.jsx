import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "./store/User-context";
import { Toaster } from "react-hot-toast";

export const server = `https://shopspheree-backend.onrender.com`;

function App() {
  const { isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${server}/users/getMyProfile`, {
          method: "GET",
          credentials: "include",
        });

        const json = await response.json();

        if (json.success) {
          setIsAuthenticated(true);
          setUser(json.user);
        } else {
          setIsAuthenticated(false);
          setUser({});
        }
      } catch (error) {
        console.log("Some error occurred !");
      }
    };

    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
