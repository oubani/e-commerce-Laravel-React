import { LOGIN, CHECK_LOGIN, REGISTER } from '../actions/types';
const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userStore', JSON.stringify(action.payload.user));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case REGISTER:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userStore', JSON.stringify(action.payload.user));
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case CHECK_LOGIN:
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('userStore'));
      return {
        ...state,
        token: token,
        user: user,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
