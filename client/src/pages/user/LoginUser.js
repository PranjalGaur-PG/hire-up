import React from "react";
import { useState } from "react";
import "./user.css";

const LoginUser = ({ setpage }) => {
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
        <input type="submit" className="btn-user" value="Login" />
      </form>

      <br />
      <br />
      <br />
      <p className="my-1">
        Don't have an account?{" "}
        <div
          className="btn-user cursor-pointer text-center"
          onClick={() => setPageToSignup()}
        >
          Sign Up
        </div>
      </p>
    </React.Fragment>
  );
};

export default LoginUser;
