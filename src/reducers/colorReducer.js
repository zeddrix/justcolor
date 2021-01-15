import * as c from '../actions/constants';

export const getNewColorsFromLsReducer = (state = { newColors: null }, action) => {
  switch (action.type) {
    case c.GET_NEW_COLORS_FROM_LS:
      return {
        ...state,
        newColors: action.payload,
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
