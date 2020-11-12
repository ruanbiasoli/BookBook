import { LOGIN, LOGOUT } from "../actions";

const defaultState = {
  user: JSON.parse(localStorage.getItem("user")),
  token: null,
};
const validLogin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.data,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default validLogin;
