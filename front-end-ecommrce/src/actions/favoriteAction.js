import axios from 'axios';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, GET_FAVORITE } from './types';

// back link
const link = process.env.REACT_APP_DOMAIN;

const accessToken = localStorage.getItem('token');
// const accessToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwODc0MjA2NywiZXhwIjoxNjEyMzQyMDY3LCJuYmYiOjE2MDg3NDIwNjcsImp0aSI6IjdIYXc2MTR1N1ZKQk1GbWIiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.YWiT3mGWomCYCxKZ2Vh8XzOXG0hXElXMBMLRxKktnUI`;

// Configure axios

const authAxios = axios.create({
  baseURL: link,
  headers: {
    authorization: `Bearer ${accessToken}`,
  },
});
// insted of calling axios we call authAxios

// axios.interceptors.request.use(
//   (config) => {
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getUserFavorite = () => async (dispatch) => {
  try {
    const res = await authAxios.post(`${link}/getUserFavorite`);
    console.log(res.data.fav);
    dispatch({
      type: GET_FAVORITE,
      payload: res.data.fav,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addToFavorite = (id) => async (dispatch) => {
  try {
    const res = await authAxios.post(`${link}/addToFavorite`, {
      product_id: id,
    });

    console.log(res);
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: id,
    });
  } catch (error) {
    console.log(error.response);
    // dispatch({
    //   type: ADD_TO_FAVORITE,
    //   payload: id,
    // });
  }
};

export const removeFromFavorites = (id) => async (dispatch) => {
  try {
    const res = await authAxios.post(`${link}/removeFromFavorite`, {
      product_id: id,
    });
    dispatch({
      type: REMOVE_FROM_FAVORITE,
      payload: id,
    });
  } catch (error) {
    console.log('error' + error);
  }
};
