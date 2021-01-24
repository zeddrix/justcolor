import * as c from './constants';

export const showToast = () => (dispatch) => {
	dispatch({
		type: c.SHOW_TOAST,
		payload: 'toast show',
	});
};

export const hideToast = () => (dispatch) => {
	dispatch({
		type: c.HIDE_TOAST,
		payload: 'toast',
	});
};
