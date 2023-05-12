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
} from "../actions/types";

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
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
        role: "user",
      };

    case ORG_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        org: payload,
        role: "org",
      };

    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };

    case ORG_REGISTER_SUCCESS:
    case ORG_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: null,
        org: payload,
        role: "org",
      };

    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
    case ORG_REGISTER_FAIL:
    case ORG_LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        org: null,
        loading: false,
        role: null,
      };

    default:
      return state;
  }
}
