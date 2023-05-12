import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import { setAlert } from "../../actions/alert";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  role,
}) => {
  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  setAlert("You don't have access to this page", "danger");
  return <Navigate to="/" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  role: state.auth.role,
});

export default connect(mapStateToProps, { setAlert })(PrivateRoute);
