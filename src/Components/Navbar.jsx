import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="preview-title">
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/Contactus">
          <li>Contact us</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
