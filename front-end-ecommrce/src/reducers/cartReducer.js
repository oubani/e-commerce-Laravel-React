import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState = {
  cart: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action.payload.item.id);
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    default:
      return state;
  }
};
