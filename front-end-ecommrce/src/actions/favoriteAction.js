// import axios from 'axios;';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './types';

// back link
const link = process.env.REACT_APP_DOMAIN;

export const addToFavorite = (id) => async (dispatch) => {
  dispatch({
    type: ADD_TO_FAVORITE,
    payload: id,
  });
};

export const removeFromFavorites = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_FAVORITE,
    payload: id,
  });
};
