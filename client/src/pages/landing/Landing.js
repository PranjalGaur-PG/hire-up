import React from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./Landing.css";

const Landing = ({ isAuthenticated, role }) => {
  // Redirect if logged in
  if (isAuthenticated && role === "user") {
    return <Navigate to="/user-dashboard" />;
  }

  if (isAuthenticated && role === "org") {
    return <Navigate to="/org-dashboard" />;
  }

  return (
    <div className="land-container">
      <div className="py-3 pt-0 font-bold">Welcome to</div>
      <div className="py-3 text-7xl font-black">Hire-UP</div>
      <div className="py-3 font-thin">Where talent meets opportunities</div>
      <div className="py-3 font-medium">
        A Early Talent Engagement & Hiring Platform
      </div>
      <div className="flex py-10">
        <Link to="/user">
          <div className="mx-6 land-btn px-6 py-4 flex flex-col cursor-pointer">
            <div className="font-light">Enter as</div>
            <div className="font-bold text-2xl">User</div>
          </div>
        </Link>
        <Link to="/org">
          <div className="mx-6 land-btn px-6 py-4 flex flex-col cursor-pointer">
            <div className="font-light">Enter as</div>
            <div className="font-bold text-2xl">Organization</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(Landing);
