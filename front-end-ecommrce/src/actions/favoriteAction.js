import axios from 'axios;';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './types';

// back link
const link = process.env.REACT_APP_DOMAIN;

export const addToFavorite = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`${link}`);
  } catch (error) {}
};
