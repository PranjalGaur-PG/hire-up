import React from "react";
import "./org.css";

const IntroOrg = ({ setpage }) => {
  const setPagetoLogin = () => {
    setpage(1);
  };

  const setPagetoSignup = () => {
    setpage(2);
  };

  return (
    <div className="flex flex-col">
      <div className="text-4xl py-5">Org Section</div>
      <div className="flex-start">
        <div className="text-2xl py-2">
          What we have to offer on our platform for the orgs
        </div>
        <div className="py-3">
          <ul>
            <li>Features</li>
            <li>Features</li>
            <li>Features</li>
            <li>Features</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around">
        <div
          className="cursor-pointer btn-user flex justify-center"
          onClick={() => setPagetoLogin()}
        >
          Login
        </div>
        <div
          className="cursor-pointer btn-user flex justify-center"
          onClick={() => setPagetoSignup()}
        >
          Signup
        </div>
      </div>
    </div>
  );
};

export default IntroOrg;
