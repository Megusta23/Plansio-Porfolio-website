import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <img src="../../logo.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="button">
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
