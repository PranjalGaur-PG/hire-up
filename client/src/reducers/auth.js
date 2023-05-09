import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  role: null,
  user: null,
  org: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        role: "user",
      };

    default:
      return state;
  }
}
