import { writable } from 'svelte/store';

export const pageBgColorStore = writable('');
export const paletteOpenStore = writable(true);
export const appendModalOpenStore = writable(false);
export const editModalOpenStore = writable(false);

export const modalInputValueStore = writable('');

export const colorButtonsStore = writable([]);
