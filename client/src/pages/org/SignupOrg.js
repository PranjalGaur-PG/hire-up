import React from "react";
import { useState } from "react";
import "./org.css";
import { connect } from "react-redux";
import { registerOrg } from "../../actions/auth";
import { setAlert } from "../../actions/alert";

const SignupOrg = ({ setpage, registerOrg }) => {
  const [formData, setFormData] = useState({
    name: "",
    orgID: "",
    password: "",
    password2: "",
  });

  const { name, orgID, password, password2 } = formData;

  const setPageToLogin = () => {
    setpage(1);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("Passwords do not match !", "danger", 4000);
      alert("Passwords do not match !");
    } else {
      registerOrg({ name, orgID, password });

      console.log("Success");
    }
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
            type="text"
            placeholder="Organization ID"
            name="orgID"
            value={orgID}
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
      <br />
      <div className="my-1">
        Already have an account?{" "}
        <div
          className="btn-user text-center cursor-pointer"
          onClick={() => setPageToLogin()}
        >
          Sign In
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { registerOrg })(SignupOrg);
