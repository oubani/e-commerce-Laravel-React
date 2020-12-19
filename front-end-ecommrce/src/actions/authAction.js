import {
  LOGIN,
  LOG_OUT,
  REGISTER,
  CHECK_LOGIN,
  LOGIN_FAILED,
  CLEAR_ERRORS,
} from '../actions/types';
import axios from 'axios';

const link = process.env.REACT_APP_DOMAIN;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const login = (formData) => async (dispatch) => {
  console.log(formData);

  try {
    const res = await axios.post(`${link}/auth/login`, formData, config);
    console.log(res.data);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data.msg,
    });
    console.log(error.response.data.msg);
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
    console.log(err.response.data.msg);
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

export const refresh = (token) => async (dispatch) => {
  try {
    const newToken = axios.post(`${link}/auth/refresh`, { token }, config);
    dispatch({
      type: '',
    });
  } catch (error) {}
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
