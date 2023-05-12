import axios from "axios";
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
  ORG_LOGIN_SUCCESS,
  ORG_LOGIN_FAIL,
  USER_LOADED,
  ORG_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

// Load User
export const loadUser = () => async (dispatch) => {
  // Set Token in axios heaader if it exists
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    //Get the role of token's owner
    const res = await axios.get("api/auth/getrole");

    if (res.data.role === "user") {
      try {
        const res = await axios.get("/api/auth/user");

        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    } else if (res.data.role === "org") {
      try {
        const res = await axios.get("/api/auth/org");

        dispatch({
          type: ORG_LOADED,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: AUTH_ERROR,
        });
      }
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const registerUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      // Registering the user and getting back the token in res
      const res = await axios.post("api/user", body, config);
      console.log(res.data);

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: USER_REGISTER_FAIL,
      });
    }
  };

// Login User
export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    console.log("Login Started");
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    console.log(body);

    try {
      const res = await axios.post("api/auth/user", body, config);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (err) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: USER_LOGIN_FAIL,
      });
    }
  };

//Register Org
export const registerOrg =
  ({ name, orgID, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, orgID, password });

    try {
      const res = await axios.post("/api/org", body, config);
      console.log(res.data);

      dispatch({
        type: ORG_REGISTER_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: ORG_REGISTER_FAIL,
      });
    }
  };

// Login Org
export const loginOrg =
  ({ orgID, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ orgID, password });

    try {
      const res = await axios.post("api/auth/org", body, config);

      dispatch({
        type: ORG_LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: ORG_LOGIN_FAIL,
      });
    }
  };

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
