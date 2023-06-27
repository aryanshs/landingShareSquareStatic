import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Navbar.css";
import logo from "../static/logo.png";
import brandName from "../static/sharesquare.png";

export default function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar border-bottom border-bottom-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navGridDiv">
          <div className="logoBrandDiv">
            <a class="navbar-brand" href="#">
              <img className="logoImage" src={logo}></img>
              <img className="brandName" src={brandName}></img>
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse navLinksDiv"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav navLinks">
              <a className="nav-link navLinks" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link navLinks" href="#">
                About Us
              </a>
              <a className="nav-link navLinks" href="#">
                Contact Us
              </a>
            </div>
            <div className="signUpDiv">
              <a className="signUpLink" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
