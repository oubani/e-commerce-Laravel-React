import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  EMPTY_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from './types';

export const addToCart = (quantity, item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { quantity: quantity, item: item },
  });
};
export const updateCart = (quantity, item) => (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: { quantity: quantity, item: item },
  });
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { id: id },
  });
};
export const incrementItem = (id) => (dispatch) => {
  dispatch({
    type: INCREMENT_ITEM,
    payload: { id: id },
  });
};
export const decrementItem = (id) => (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM,
    payload: { id: id },
  });
};

export const emptyCart = (id) => (dispatch) => {
  dispatch({
    type: EMPTY_CART,
    payload:null
  });
}