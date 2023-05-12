import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import IntroOrg from "./IntroOrg";
import LoginOrg from "./LoginOrg";
import SignupOrg from "./SignupOrg";
import { connect } from "react-redux";
import "./org.css";

const LandingOrg = ({ isAuthenticated, role }) => {
  const [page, setPage] = useState(0);

  // Redirect if logged in
  if (isAuthenticated && role === "user") {
    return <Navigate to="/user-dashboard" />;
  }

  if (isAuthenticated && role === "org") {
    return <Navigate to="/org-dashboard" />;
  }

  return (
    <div className="container h-screen">
      <div className="heading text-5xl py-3 md:py-6">
        <Link to="/">Hire-UP</Link>
      </div>
      <div className="grid grid-cols-4 w-full gap-6 h-screen">
        <div className="col-span-1 flex justify-center align-middle">
          <div>
            <Link to="/">
              <div className="btn-user mt-6 flex justify-center">Home Page</div>
            </Link>
            <Link to="/user">
              <div className="btn-user mt-6 flex justify-center">User Page</div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 p-4">
          {page === 0 && <IntroOrg setpage={setPage} />}
          {page === 1 && <LoginOrg setpage={setPage} />}
          {page === 2 && <SignupOrg setpage={setPage} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(LandingOrg);
