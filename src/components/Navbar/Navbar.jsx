import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import Cart from "../Cart/Cart";
import CartIcon from "../CartIcon/CartIcon";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const searchTerm = useRef("");

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark large-navbar">
        <div className="container-fluid">
          <a className="navbar-brand nav-title" href="#">
            Shop <span style={{ color: "rgb(140, 251, 255)" }}>Sphere</span>
          </a>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/men's clothing"
                    >
                      men's clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/women's clothing"
                    >
                      women's clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categories/jewelery">
                      jewelery
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/electronics"
                    >
                      electronics
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex search-input" role="search">
              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={searchTerm}
              />
              <button
                className="btn btn-success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/search-results?query=${searchTerm.current.value}`);
                }}
              >
                Search
              </button>
            </form>

            <div className="search-container">
              <div className="cart-icon">
                <CartIcon />
              </div>

              <div className="profile-icon">
                <CgProfile />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-dark sticky-top bg-dark small-navbar">
        <div className="container-fluid wow">
          <a className="navbar-brand nav-title" href="#">
            Shop <span style={{ color: "rgb(140, 251, 255)" }}>Sphere</span>
          </a>
          <div className="search-container">
            <div className="cart-icon">
              <CartIcon />
            </div>

            <div className="profile-icon">
              <CgProfile />
            </div>
          </div>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/men's clothing"
                    >
                      men's clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/women's clothing"
                    >
                      women's clothing
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categories/jewelery">
                      jewelery
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categories/electronics"
                    >
                      electronics
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* OffCanvas */}
      <Cart />
    </>
  );
};

export default Navbar;
