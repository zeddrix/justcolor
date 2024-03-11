<script lang="ts">
	import { v4 as uuid } from 'uuid';

	import {
		appendModalOpenStore,
		colorButtonsStore,
		colorDuplicatedStore,
		modalInputValueStore,
		pageBgColorStore
	} from '$lib/store';

	import Modal from './Modal.svelte';
	import { openAppendSnackbar, openDuplicateSnackbar } from '$lib/snackbarFunctions.svelte';

	const closeAppendModal = () => appendModalOpenStore.set(false);

	const appendNewColor = () => {
		const newColor = {
			name: $modalInputValueStore,
			rgb: $pageBgColorStore,
			id: uuid()
		};
		const newColorButtonsSet = [...$colorButtonsStore, newColor];
		colorButtonsStore.set(newColorButtonsSet);
		localStorage.setItem('colorButtons', JSON.stringify(newColorButtonsSet));

		$colorDuplicatedStore ? openDuplicateSnackbar() : openAppendSnackbar();
		closeAppendModal();
	};
</script>

<Modal
	bind:open={$appendModalOpenStore}
	on:keydown={(e) => e.key === 'Enter' && appendNewColor()}
	modalType="append"
	modalLabel="Name your new color button:"
	button1Class="cancel"
	button2Class="add"
	button1Name="Cancel"
	button2Name={$colorDuplicatedStore ? 'Duplicate' : 'Add!'}
	onButton1Click={closeAppendModal}
	onButton2Click={appendNewColor}
/>
