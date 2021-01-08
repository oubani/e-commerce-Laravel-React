import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_FAVORITE,
} from '../actions/types';

const initialState = {
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FAVORITE:
      return {
        ...state,
        favorites: action.payload,
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
