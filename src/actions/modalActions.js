import * as c from './constants';

export const showSettings = () => {
	return {
		type: c.SHOW_SETTINGS,
	};
};

export const hideSettings = () => {
	return {
		type: c.HIDE_SETTINGS,
	};
};

export const showAppendModal = () => {
	return {
		type: c.SHOW_APPEND_MODAL,
	};
};

export const hideAppendModal = () => {
	return {
		type: c.HIDE_APPEND_MODAL,
	};
};

export const showEditModal = () => {
	return {
		type: c.SHOW_EDIT_MODAL,
	};
};

export const hideEditModal = () => {
	return {
		type: c.HIDE_EDIT_MODAL,
	};
};

export const showPalette = () => {
	return {
		type: c.SHOW_PALETTE,
	};
};

export const hidePalette = () => {
	return {
		type: c.HIDE_PALETTE,
	};
};

export const showToast = () => {
	return {
		type: c.SHOW_TOAST,
	};
};

export const hideToast = () => {
	return {
		type: c.HIDE_TOAST,
	};
};
