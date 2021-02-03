import * as c from '../actions/constants';
import { initialColors } from '../components/colorBtns/initialColors';

export const colorsReducer = (state = { colors: initialColors }, action) => {
	switch (action.type) {
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
		case c.SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case c.CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case c.UPDATE_COLOR:
			return {
				...state,
				colors: state.colors.map((color) =>
					color.id === action.payload.id ? action.payload : color
				),
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
