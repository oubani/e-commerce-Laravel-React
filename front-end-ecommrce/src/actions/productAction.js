import {
  GETHIGHPROMOTION,
  GETMOSTORDERED,
  GETNEWPRODUGETNEWPRODUCTS,
  GETNEWPRODUCTS,
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
    // dispatch({
    //   type: LOGS_ERROR,
    //   payload: err.response.statusText,
    // });
  }
};
// get the high ptomoted products
export const getHighPromotion = () => async (dispatch) => {
  try {
    const res = await axios.get(`${link}/products/high`);
    dispatch({
      type: GETNEWPRODUCTS,
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
export const getMostOrderd = () => async (dispatch) => {
  try {
    const res = await axios.get(`${link}/products/mostOrdered`);
    dispatch({
      type: GETMOSTORDERED,
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

// Get one product to showProduct 
export const getProduct = (id) => async (dispatch) => {
  try {
    
  } catch (error) {
    
  }
}
