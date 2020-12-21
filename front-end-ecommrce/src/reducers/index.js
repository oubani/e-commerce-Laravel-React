import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import favoriteReducer from './favoriteReducer';
export default combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  favorite: favoriteReducer,
});
