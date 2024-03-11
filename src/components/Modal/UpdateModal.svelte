<script>
	import { openDeleteSnackbar, openUpdateSnackbar } from '$lib/snackbarFunctions.svelte';

	import {
		colorButtonToUpdateStore,
		colorButtonsStore,
		updateModalOpenStore,
		modalInputValueStore
	} from '$lib/store';

	import Modal from './Modal.svelte';

	const closeUpdateModal = () => updateModalOpenStore.set(false);

	const deleteColor = () => {
		colorButtonsStore.set(
			// @ts-ignore
			$colorButtonsStore.filter((color) => color.id !== $colorButtonToUpdateStore.id)
		);

		localStorage.setItem('colorButtons', JSON.stringify($colorButtonsStore));
		closeUpdateModal();
		openDeleteSnackbar();
	};

	const updateColor = () => {
		const updatedColor = {
			// @ts-ignore
			...$colorButtonToUpdateStore,
			name: $modalInputValueStore
		};
		colorButtonsStore.set(
			$colorButtonsStore.map((color) =>
				// @ts-ignore
				color.id === $colorButtonToUpdateStore.id ? updatedColor : color
			)
		);

		localStorage.setItem('colorButtons', JSON.stringify($colorButtonsStore));
		closeUpdateModal();
		openUpdateSnackbar();
	};
</script>

<Modal
	bind:open={$updateModalOpenStore}
	on:keydown={(e) => e.key === 'Enter' && updateColor()}
	modalType="update"
	modalLabel="Update color button's name:"
	button1Class="delete"
	button2Class="done"
	button1Name="Delete"
	button2Name="Done"
	onButton1Click={deleteColor}
	onButton2Click={updateColor}
/>
