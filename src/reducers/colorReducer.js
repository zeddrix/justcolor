import * as c from '../actions/constants';

export const getColorsReducer = (state = { colors: null }, action) => {
  switch (action.type) {
    case c.GET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
};

export const appendNewColorReducer = (state = {}, action) => {
  switch (action.type) {
    case c.APPEND_NEW_COLOR:
      return {
        ...state,
        newColor: action.payload
      };
    default:
      return state;
  }
};
