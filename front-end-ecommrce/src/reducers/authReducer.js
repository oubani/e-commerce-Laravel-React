import {
  LOGIN,
  CHECK_LOGIN,
  REGISTER,
  REGISTER_FAIL,
  CHECK_ADMIN,
  LOGIN_FAILED,
  REGISTER_FAILED,
  CLEAR_ERRORS,
} from '../actions/types';
const initialState = {
  token: null,
  isAuthenticated: false,
  isAdmin: null,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      setLocalstorage(
        action.payload.access_token,
        action.payload.userName,
        true
      );

      return {
        ...state,
        token: action.payload.access_token,
        user: action.payload.userName,
        isAuthenticated: true,
      };
    case REGISTER:
      setLocalstorage(action.payload.access_token, action.payload.name, true);
      console.log(action.payload);
      return {
        ...state,
        token: action.payload.access_token,
        user: action.payload.name,
        isAuthenticated: true,
      };
    case CHECK_LOGIN:
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('userStore');

      return {
        ...state,
        token: token,
        user: user,
        isAuthenticated: action.payload,
      };
    case CHECK_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: JSON.parse(action.payload),
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    default:
      return state;
  }
};

const setLocalstorage = (token, user, isauthenticated) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userStore', user);
  localStorage.setItem('isAuthenticated', isauthenticated);
};
