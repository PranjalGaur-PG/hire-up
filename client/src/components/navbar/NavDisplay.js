import React from "react";
import { connect } from "react-redux";
import OrgNavbar from "./OrgNavbar";
import UserNavbar from "./UserNavbar";

const NavDisplay = ({ isAuthenticated, role }) => {
  if (isAuthenticated && role === "org") return <OrgNavbar />;
  if (isAuthenticated && role === "user") return <UserNavbar />;

  return <></>;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, {})(NavDisplay);
