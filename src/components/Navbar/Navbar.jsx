// Navbar.js
import React, { useRef } from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import Cart from "../Cart/Cart";
import CartIcon from "../CartIcon/CartIcon";
import { Link, useNavigate } from "react-router-dom";
import "instantsearch.css/themes/satellite.css";
import { SearchBox } from "react-instantsearch";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-navbar shadow-sm sticky-top bg-dark">
        <div className="top-navbar">
          <div className="container-fluid">
            <div className="d-flex justify-content-between">
              <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                <h5 className="brand-name nav-title">
                  Shop{" "}
                  <span style={{ color: "rgb(140, 251, 255)" }}>Sphere</span>
                </h5>
              </div>
              <div className="col-md-8 my-auto d-flex justify-content-end">
                <SearchBox />
                <button
                  className="btn bg-success text-white"
                  type="submit"
                  style={{
                    height: "40px",
                    marginTop: "0.48rem",
                    borderRadius: "0px 5px 5px 0px",
                    marginRight: "0.8rem",
                  }}
                >
                  <FiSearch />
                </button>
                <div className="nav-item cart-icon">
                  <CartIcon />
                </div>
                <div
                  className="nav-item profile-icon"
                  onClick={() => navigate("/user-details")}
                >
                  <CgProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a
              className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
              href="#"
            >
              <b>
                Shop
                <span style={{ color: "rgb(2, 8, 195)" }}>Sphere</span>
              </b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => {
                const navbarCollapse = document.getElementById(
                  "navbarSupportedContent"
                );
                if (navbarCollapse) {
                  navbarCollapse.classList.toggle("show");
                }
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories/men's clothing">
                    Men's clothing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories/women's clothing">
                    Women's clothing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories/jewelery">
                    Jewellery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories/electronics">
                    Electronics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Cart />
    </>
  );
};

export default Navbar;
