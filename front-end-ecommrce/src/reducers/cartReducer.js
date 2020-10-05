import { removeFromCart } from '../actions/cartAction';
import {
  ADD_TO_CART,
  UPDATE_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  cart: [],
};
const alreadyExisit = (id, cart) => {
  if (cart.length === 0) {
    return false;
  }
  let flag = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      flag = true;
      break;
    }
  }
  return flag;
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (alreadyExisit(action.payload.item.id, state.cart)) {
        return {
          ...state,
          cart: [
            ...state.cart.map((item) => {
              if (item.id === action.payload.item.id) {
                item.quantity += action.payload.quantity;
                return item;
              } else return item;
            }),
          ],
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.item],
        };
      }
    case UPDATE_CART:
      console.log(action.payload.item.id);
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case removeFromCart:
      return {
        ...state,
      };
    default:
      return state;
  }
};
