import {
  GETHIGHPROMOTION,
  GETMOSTORDERED,
  GETNEWPRODUCTS,
  SHOWPRODUCT,
} from './types';
import axios from 'axios';

const link = 'http://localhost:8000/api';

// get new  products
export const getNewProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${link}/products/new`);
    dispatch({
      type: GETNEWPRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
// get the high ptomoted products
export const getHighPromotion = () => async (dispatch) => {
  try {
    const res = await axios.get(`${link}/products/high`);
    dispatch({
      type: GETHIGHPROMOTION,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getMostOrderd = () => async (dispatch) => {
  try {
    const res = await axios.get(`${link}/products/mostOrdered`);
    dispatch({
      type: GETMOSTORDERED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (id) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/product/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
