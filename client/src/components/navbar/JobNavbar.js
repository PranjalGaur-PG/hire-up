import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const JobNavbar = () => {
  return (
    <div className="navbar">
      <div className="nav-title">
        <Link to="/">
          <div>Hire-Up</div>
        </Link>
      </div>
      <div className="nav-list">
        <div className="nav-item">
          <Link to="/">Home Page</Link>
        </div>
        <div className="nav-item">
          <Link to="/user">User Login</Link>
        </div>
        <div className="nav-item">
          <Link to="/org">Company Login</Link>
        </div>
      </div>
    </div>
  );
};

export default JobNavbar;
