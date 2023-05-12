import React, { useState } from "react";
import "./user.css";
import { Link, Navigate } from "react-router-dom";
import IntroUser from "./IntroUser";
import LoginUser from "./LoginUser";
import SignupUser from "./SignupUser";
import { connect } from "react-redux";

const LandingUser = ({ isAuthenticated, role }) => {
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
            <Link to="/org">
              <div className="btn-user mt-6 flex justify-center">Org Page</div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 p-4">
          {page === 0 && <IntroUser setpage={setPage} />}
          {page === 1 && <LoginUser setpage={setPage} />}
          {page === 2 && <SignupUser setpage={setPage} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(LandingUser);
