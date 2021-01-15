import * as c from '../actions/constants';
import { initialColors } from '../components/colorBtns/initialColors';

export const renderAllColorsReducer = (state = { allColors: initialColors }, action) => {
  switch (action.type) {
    case c.RENDER_ALL_COLORS:
      return {
        ...state,
        allColors: initialColors.concat(action.payload),
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
