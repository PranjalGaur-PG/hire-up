import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ page }) => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <div className="">Hire UP</div>
        </Link>
      </div>
      <div className="nav-list px-8">
        <div className="nav-item px-8">
          <a>Home</a>
        </div>
        <div className="nav-item px-8">
          <a>Jobs</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
