import React from "react";
import { useState } from "react";
import "./user.css";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

const LoginUser = ({ setpage, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const setPageToSignup = () => {
    setpage(2);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser({ email, password });

    console.log("Success");
  };

  return (
    <React.Fragment>
      <div className="text-4xl py-5">Login Form</div>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
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
        <input
          type="submit"
          className="btn-user cursor-pointer"
          value="Login"
        />
      </form>

      <br />
      <br />
      <br />
      <div className="my-1 cursor-pointer">
        Don't have an account?{" "}
        <div className="btn-user text-center" onClick={() => setPageToSignup()}>
          Sign Up
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { loginUser })(LoginUser);
