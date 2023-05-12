import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { loginOrg } from "../../actions/auth";
import "./org.css";

const LoginOrg = ({ setpage, loginOrg }) => {
  const [formData, setFormData] = useState({
    orgID: "",
    password: "",
  });

  const { orgID, password } = formData;

  const setPageToSignup = () => {
    setpage(2);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    loginOrg({ orgID, password });

    console.log("Success");
  };

  return (
    <React.Fragment>
      <div className="text-4xl py-5">Login Form</div>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Organization ID"
            name="orgID"
            value={orgID}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn-user" value="Login" />
      </form>

      <br />
      <br />
      <br />
      <div className="my-1">
        Don't have an account?{" "}
        <div
          className="btn-user cursor-pointer text-center"
          onClick={() => setPageToSignup()}
        >
          Sign Up
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { loginOrg })(LoginOrg);
