import * as c from '../actions/constants';
import { initialColors } from '../components/colorBtns/initialColors';

export const colorsReducer = (state = { colors: initialColors }, action) => {
	switch (action.type) {
		case c.GET_COLORS:
			return {
				...state,
				colors: [...initialColors, ...action.payload],
			};
		case c.APPEND_COLOR:
			return {
				...state,
				colors: [...state.colors, action.payload],
			};
		default:
			return state;
	}
};
