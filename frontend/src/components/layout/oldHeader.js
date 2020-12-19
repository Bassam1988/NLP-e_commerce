import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        WYW-WYD
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>

      {auth.isAuthenticated ? (
        <ul className="nav justify-content-end  my-2 my-lg-0 navbar-nav">
          <span className="navbar-text mr-3">
            <strong>{auth.user ? `Welcome ${auth.user.first_name}` : ""}</strong>
          </span>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm btn-primary"
              onClick={() => dispatch(logoutUser())}
            >
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className="nav justify-content-end  my-2 my-lg-0 navbar-nav">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;
