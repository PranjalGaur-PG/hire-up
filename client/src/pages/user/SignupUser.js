import React from "react";
import { useState } from "react";
import "./user.css";

const SignupUser = ({ setpage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const setPageToLogin = () => {
    setpage(1);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="text-4xl py-5">SignUp Form</div>

      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            // required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            // required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            // required
            minLength="6"
          />
        </div>
        <input type="submit" className="btn-user" value="Register" />
      </form>
      <p className="my-1">
        Already have an account?{" "}
        <div
          className="btn-user text-center cursor-pointer"
          onClick={() => setPageToLogin()}
        >
          Sign In
        </div>
      </p>
    </React.Fragment>
  );
};

export default SignupUser;
