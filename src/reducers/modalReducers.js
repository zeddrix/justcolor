import * as c from '../actions/constants';

export const toggleSettingsReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_SETTINGS:
			return true;
		case c.HIDE_SETTINGS:
			return false;
		default:
			return state;
	}
};

export const toggleAppendModalReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_APPEND_MODAL:
			return true;
		case c.HIDE_APPEND_MODAL:
			return false;
		default:
			return state;
	}
};

export const toggleEditModalReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_EDIT_MODAL:
			return true;
		case c.HIDE_EDIT_MODAL:
			return false;
		default:
			return state;
	}
};

export const togglePaletteReducer = (state = true, action) => {
	switch (action.type) {
		case c.HIDE_PALETTE:
			return false;
		case c.SHOW_PALETTE:
			return true;
		default:
			return state;
	}
};

const initialState = {
	show: false,
	msg: null,
	id: null,
};

export const toastReducer = (state = initialState, action) => {
	switch (action.type) {
		case c.SHOW_TOAST:
			return {
				show: true,
				msg: action.msg,
				id: action.id,
			};
		case c.HIDE_TOAST:
			return initialState;
		default:
			return state;
	}
};
