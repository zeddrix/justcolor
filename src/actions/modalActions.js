import * as c from './constants';

export const showSettings = () => ({
	type: c.SHOW_SETTINGS,
});

export const hideSettings = () => ({
	type: c.HIDE_SETTINGS,
});

export const showAppendModal = () => ({
	type: c.SHOW_APPEND_MODAL,
});

export const hideAppendModal = () => ({
	type: c.HIDE_APPEND_MODAL,
});

export const showEditModal = () => ({
	type: c.SHOW_EDIT_MODAL,
});

export const hideEditModal = () => ({
	type: c.HIDE_EDIT_MODAL,
});

export const showPalette = () => ({
	type: c.SHOW_PALETTE,
});

export const hidePalette = () => ({
	type: c.HIDE_PALETTE,
});
