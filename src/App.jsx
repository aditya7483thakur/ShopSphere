import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect } from "react";
import { UserContext } from "./store/User-context";
import { Toaster } from "react-hot-toast";
import { Configure, InstantSearch } from "react-instantsearch";
import algoliasearch from "algoliasearch";

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

  const searchClient = algoliasearch(
    "ZMR0NCT709",
    "3979dedb4502ea0dcb7f873c89cc3a71"
  );

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="PRODUCTS">
        <Configure hitsPerPage={20} />
        <Navbar />
        <Outlet />
        <Toaster />
        <Footer />
      </InstantSearch>
    </>
  );
}

export default App;
