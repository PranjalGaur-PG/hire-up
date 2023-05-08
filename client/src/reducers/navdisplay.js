import { HOMEPAGE, USERPAGE, ORGPAGE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case HOMEPAGE:
      return {};

    case USERPAGE:
    case ORGPAGE:
      return {
        login: "/login",
        signup: "/signup",
      };

    default:
      return state;
  }
}
