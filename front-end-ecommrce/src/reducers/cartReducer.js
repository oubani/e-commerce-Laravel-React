import {
  ADD_TO_CART,
  UPDATE_CART,
  EMPTY_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from '../actions/types';

const initialState = {
  cart:
    localStorage.getItem('cart') !== null
      ? JSON.parse(localStorage.getItem('cart')).map((item) => item)
      : [],
};

// check if the product exist on cart
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
      if (localStorage.getItem('cart') === null) {
        var cart = [];
        cart.push(action.payload.item);
        cart.splice(action.payload.item);
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      if (alreadyExisit(action.payload.item.id, state.cart)) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach((item) => {
          if (item.id === action.payload.item.id) {
            item.quantity++;
          }
        });

        localStorage.setItem('cart', [JSON.stringify(cart)]);
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
        if (JSON.parse(localStorage.getItem('cart')) === null) {
          localStorage.setItem('cart', JSON.stringify(action.payload.item));
        } else {
          var cart = JSON.parse(localStorage.getItem('cart'));
          cart.push(action.payload.item);
          localStorage.setItem('cart', JSON.stringify(cart));
        }
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
      var cart = JSON.parse(localStorage.getItem('cart'));
      var newCart = cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREMENT_ITEM:
      var cart = JSON.parse(localStorage.getItem('cart'));
      cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity++;
          return item;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(cart));
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
      var cart = JSON.parse(localStorage.getItem('cart'));
      cart.forEach((item) => {
        if (item.id === action.payload.id) {
          item.quantity--;
          return item;
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(cart));
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
      // localStorage.setItem('cart', []);
      return {
        ...state,
        cart: state.cart.splice(),
      };
    default:
      return state;
  }
};
