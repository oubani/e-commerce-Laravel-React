import {
  ADD_TO_CART,
  UPDATE_CART,
  EMPTY_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  cart: [
    {
      id: 3,
      name: 'canon z800 camera ',
      prix: 10000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512',
      quantity: 1,
    },
  ],
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
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity++;
            return item;
          }
          return item;
        }),
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity--;
              return item;
            } else return item;
          }),
        ],
      };
    case EMPTY_CART:
      return {
        ...state,
        cart : state.cart.splice()
      };
    default:
      return state;
  }
};
