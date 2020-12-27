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

const authAxios = axios.create({
  baseURL: link,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  Authorization: `Bearer ${token}`,
};

export const login = (formData) => async (dispatch) => {
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
  try {
    const response = await authAxios.post('/auth/checkAdmin');
    console.log('response' + response.data.role);
    dispatch({
      type: CHECK_ADMIN,
      payload: response.data.role,
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
      payload: newToken,
    });
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  try {
    const res = await authAxios.post(`${link}/auth/logout`);

    dispatch({
      type: LOG_OUT,
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
