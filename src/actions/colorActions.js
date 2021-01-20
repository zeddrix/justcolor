import * as c from './constants';

export const getColors = () => (dispatch) => {
	let newColors;
	if (localStorage.getItem('newColors') === null) {
		newColors = [];
	} else {
		newColors = JSON.parse(localStorage.getItem('newColors'));
	}
	dispatch({
		type: c.GET_COLORS,
		payload: newColors,
	});
};

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

export const getColorId = (id) => (dispatch) => {
	dispatch({
		type: c.GET_COLOR_ID,
		payload: id,
	});
};
