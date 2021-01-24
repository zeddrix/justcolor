import * as c from '../actions/constants';

export const toastReducer = (state = { className: 'toast' }, action) => {
	switch (action.type) {
		case c.SHOW_TOAST:
			return { className: action.payload };
		case c.HIDE_TOAST:
			return { className: 'toast' };
		default:
			return state;
	}
};
