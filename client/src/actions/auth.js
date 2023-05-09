import axios from "axios";
import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "./types";
import setAuthToken from "../utils/setAuthToken";

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
      const res = await axios.post("api/users", body, config);
      console.log(res.data);

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }
      // dispatch({
      //   type: USER_REGISTER_FAIL,
      // });
    }
  };
