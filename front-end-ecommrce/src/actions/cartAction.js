import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './types';

export const addToCart = (quantity, item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { quantity: quantity, item: item },
  });
};
