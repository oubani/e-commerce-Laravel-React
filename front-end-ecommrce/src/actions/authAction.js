import {
  LOGIN,
  LOG_OUT,
  REGISTER,
  CHECK_LOGIN,
  CHECK_ADMIN,
  LOGIN_FAILED,
  CLEAR_ERRORS,
  REGISTER_FAILED,
} from '../actions/types';
import axios from 'axios';

const link = process.env.REACT_APP_DOMAIN;
const token = localStorage.getItem('token');

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  Authorization: `Bearer ${token}`,
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
  try {
    const res = await axios.post(`${link}/auth/register`, formData, config);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({
      type: REGISTER_FAILED,
      payload: err.response.data,
    });
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

export const checkAdmin = () => async (dispatch) => {
  console.log(` request sent | token : ${token}`);

  try {
    const response = axios.post(
      '/auth/checkAdmin',
      {},
      {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      }
    );
    console.log(` response : ${response}`);
    dispatch({
      type: CHECK_ADMIN,
      payload: response.data,
    });
  } catch (error) {
    console.log('faild ');
  }
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
