import React, { useState } from "react";
import { Link } from "react-router-dom";
import IntroOrg from "./IntroOrg";
import LoginOrg from "./LoginOrg";
import SignupOrg from "./SignupOrg";
import "./org.css";

const LandingOrg = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="container h-screen">
      <div className="heading text-5xl py-3 md:py-6">
        <Link to="/">Hire-UP</Link>
      </div>
      <div className="grid grid-cols-4 w-full gap-6 h-screen">
        <div className="col-span-1 bg-slate-200 flex justify-center align-middle">
          <div>
            <Link to="/">
              <div className="btn-user mt-6 flex justify-center">Home Page</div>
            </Link>
            <Link to="/user">
              <div className="btn-user mt-6 flex justify-center">User Page</div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 bg-slate-50 p-4">
          {page === 0 && <IntroOrg setpage={setPage} />}
          {page === 1 && <LoginOrg setpage={setPage} />}
          {page === 2 && <SignupOrg setpage={setPage} />}
        </div>
      </div>
    </div>
  );
};

export default LandingOrg;
