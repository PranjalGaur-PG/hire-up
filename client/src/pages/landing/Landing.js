import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleSeeker = () => {
    navigate("/logsign", {
      state: {
        giver: false,
        seeker: true,
      },
    });
  };
  const handleGiver = () => {
    navigate("/logsign", {
      state: {
        giver: true,
        seeker: false,
      },
    });
  };

  return (
    <div className="land-container">
      <div className="py-3 pt-0 font-bold">Welcome to</div>
      <div className="py-3 text-7xl font-black">Hire-UP</div>
      <div className="py-3 font-thin">Where talent meets opportunities</div>
      <div className="py-3 font-medium">
        A Early Talent Engagement & Hiring Platform
      </div>
      <div className="flex py-10">
        <div
          className="mx-6 land-btn px-6 py-4 flex flex-col cursor-pointer"
          onClick={handleSeeker}
        >
          <div className="font-light">Enter as</div>
          <div className="font-bold text-2xl">Job Seeker</div>
        </div>
        <div
          className="mx-6 land-btn px-6 py-4 flex flex-col cursor-pointer"
          onClick={handleGiver}
        >
          <div className="font-light">Enter as</div>
          <div className="font-bold text-2xl">Job Giver</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
