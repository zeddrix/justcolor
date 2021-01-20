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
		case c.DELETE_COLOR:
			return {
				...state,
				colors: state.colors.filter((color) => color.id !== action.payload),
			};
		default:
			return state;
	}
};

export const getColorIdReducer = (state = { colorId: null }, action) => {
	switch (action.type) {
		case c.GET_COLOR_ID:
			return {
				...state,
				colorId: action.payload,
			};
		default:
			return state;
	}
};
