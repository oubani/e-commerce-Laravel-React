import { LOGIN, LOG_OUT, REGISTER, CHECK_LOGIN } from '../actions/types';
import axios from 'axios';

export const login = (formData) => async (dispatch) => {
  console.log(formData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:8000/api/login`,
      formData,
      config
    );
    dispatch({
      type: LOGIN,
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
export const register = (formData) => async (dispatch) => {
  console.log(formData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `http://localhost:8000/api/register`,
      formData,
      config
    );
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
  dispatch({
    type: CHECK_LOGIN,
  });
};
