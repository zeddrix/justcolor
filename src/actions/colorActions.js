import * as c from './constants';

export const appendColor = (newColor) => (dispatch) => {
	dispatch({
		type: c.APPEND_COLOR,
		payload: newColor,
	});
};

export const deleteColor = (id) => (dispatch) => {
	dispatch({
		type: c.DELETE_COLOR,
		payload: id,
	});
};

export const setCurrent = (color) => ({
	type: c.SET_CURRENT,
	payload: color,
});

export const clearCurrent = () => ({
	type: c.CLEAR_CURRENT,
});

export const updateColor = (color) => (dispatch) => {
	dispatch({
		type: c.UPDATE_COLOR,
		payload: color,
	});
};

export const getColorId = (id) => (dispatch) => {
	dispatch({
		type: c.GET_COLOR_ID,
		payload: id,
	});
};
