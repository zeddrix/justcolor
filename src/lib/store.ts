import { writable } from 'svelte/store';

export const pageBgColorStore = writable('');
export const paletteOpenStore = writable(true);
export const appendModalOpenStore = writable(false);
export const updateModalOpenStore = writable(false);

export const currentColorButtonStore = writable();

export const modalInputValueStore = writable('');

export const colorButtonsStore = writable([]);

export const snackbarStore: {
	text: string;
	open: boolean;
} = writable({
	text: '',
	open: false
});
