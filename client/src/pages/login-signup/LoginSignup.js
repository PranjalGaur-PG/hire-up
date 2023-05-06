import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const LoginSignup = () => {
  const { state } = useLocation();
  console.log(state);

  return <div className="logsign-container"></div>;
};

export default LoginSignup;
