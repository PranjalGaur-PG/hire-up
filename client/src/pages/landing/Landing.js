import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

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

export default Landing;
