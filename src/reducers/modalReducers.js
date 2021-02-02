import * as c from '../actions/constants';

export const toggleSettingsReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_SETTINGS:
			return { show: true };
		case c.HIDE_SETTINGS:
			return { show: false };
		default:
			return state;
	}
};

export const toggleAppendModalReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_APPEND_MODAL:
			return { show: true };
		case c.HIDE_APPEND_MODAL:
			return { show: false };
		default:
			return state;
	}
};

export const toggleEditModalReducer = (state = false, action) => {
	switch (action.type) {
		case c.SHOW_EDIT_MODAL:
			return { show: true };
		case c.HIDE_EDIT_MODAL:
			return { show: false };
		default:
			return state;
	}
};

export const togglePaletteReducer = (state = true, action) => {
	switch (action.type) {
		case c.HIDE_PALETTE:
			return { show: false };
		case c.SHOW_PALETTE:
			return { show: true };
		default:
			return state;
	}
};

export const toastReducer = (
	state = { show: false, msg: null, id: null },
	action
) => {
	switch (action.type) {
		case c.SHOW_TOAST:
			return { show: true, msg: action.msg, id: action.id };
		case c.HIDE_TOAST:
			return { show: false, msg: null };
		default:
			return state;
	}
};
