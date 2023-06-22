import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const UserNavbar = ({ logout }) => {
  return (
    <div className="navbar">
      <div className="nav-title">
        <Link to="/">
          <div>Hire-Up</div>
        </Link>
      </div>
      <div className="nav-list">
        <div className="nav-item">
          <Link to="/user-dashboard">Dashboard</Link>
        </div>
        <div className="nav-item">
          <Link to="/jobs">All Jobs</Link>
        </div>
        <div className="nav-item">
          <Link to="/org-jobs">My Jobs</Link>
        </div>
        <div className="nav-item">
          <Link to="/org-job-applications">Job Applications</Link>
        </div>
        <div className="nav-item cursor-pointer" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default connect(null, { logout })(UserNavbar);
