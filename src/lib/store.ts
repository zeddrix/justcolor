import { writable } from 'svelte/store';

export const paletteOpenStore = writable(true);

export const appendModalOpenStore = writable(false);
export const updateModalOpenStore = writable(false);
export const modalInputValueStore = writable('');

export const pageBgColorStore = writable('');
export const colorButtonToUpdateStore = writable();
export const colorButtonsStore = writable([]);
export const colorDuplicatedStore = writable(false);

export const appendSnackbarMessageStore = writable('');
export const snackbarStore: {
	text: string;
	open: boolean;
} = writable({
	text: '',
	open: false
});
