import { GET_COLORS } from '../actions/constants';

const initialState = {
  colors: null,
  current: null,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    default:
      return state;
  }
};

export default colorReducer;
