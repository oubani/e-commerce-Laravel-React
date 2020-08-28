import {
  GETHIGHPROMOTION,
  GETMOSTORDERED,
  GETNEWPRODUCTS,
} from '../actions/types';
const initialState = {
  newProducts: null,
  highPromotion: null,
  mostOrderd: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETNEWPRODUCTS:
      return {
        ...state,
        newProducts: action.payload,
      };
    case GETMOSTORDERED:
      return {
        ...state,
        mostOrderd: action.payload,
      };
    case GETHIGHPROMOTION:
      return {
        ...state,
        highPromotion: action.payload,
      };
    default:
      return state;
  }
};
