import { LOGIN, LOG_OUT, REGISTER, CHECK_LOGIN } from '../actions/types';
import axios from 'axios';

const link = process.env.REACT_APP_DOMAIN;

const config = {
  headers: {
    'Content-Type': 'application/json',
    token: 'csrf_token()',
  },
};

export const login = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const res = await axios.post(`${link}/auth/login`, formData, config);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    console.log('call error');
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};
export const register = (formData) => async (dispatch) => {
  console.log(formData);

  try {
    const res = await axios.post(`${link}/auth/register`, formData, config);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};

export const checkLogin = (test) => async (dispatch) => {
  if (
    localStorage.getItem('isAuthenticated') === null ||
    localStorage.getItem('isAuthenticated') === false
  ) {
    console.log('not auth');
    console.log(localStorage.getItem('isAuthenticated'));
    dispatch({
      type: CHECK_LOGIN,
      payload: false,
    });
  } else
    dispatch({
      type: CHECK_LOGIN,
      payload: true,
    });
};
