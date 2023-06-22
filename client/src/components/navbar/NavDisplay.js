import React from "react";
import { connect } from "react-redux";
import OrgNavbar from "./OrgNavbar";
import UserNavbar from "./UserNavbar";
import { useLocation } from "react-router-dom";
import JobNavbar from "./JobNavbar";

const NavDisplay = ({ isAuthenticated, role }) => {
  const location = useLocation();

  if (isAuthenticated && role === "org") return <OrgNavbar />;
  if (isAuthenticated && role === "user") return <UserNavbar />;

  if (location.pathname.startsWith("/job")) return <JobNavbar />;
  return <></>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(NavDisplay);
