<script>
	import {
		currentColorButtonStore,
		colorButtonsStore,
		updateModalOpenStore,
		modalInputValueStore
	} from '$lib/store';

	import Modal from './Modal.svelte';

	const closeUpdateModal = () => updateModalOpenStore.set(false);

	const deleteColor = () => {
		colorButtonsStore.set(
			// @ts-ignore
			$colorButtonsStore.filter((color) => color.id !== $currentColorButtonStore.id)
		);

		localStorage.setItem('colorButtons', JSON.stringify($colorButtonsStore));
		closeUpdateModal();
	};

	const updateColor = () => {
		const updatedColor = {
			// @ts-ignore
			...$currentColorButtonStore,
			name: $modalInputValueStore
		};
		colorButtonsStore.set(
			$colorButtonsStore.map((color) =>
				// @ts-ignore
				color.id === $currentColorButtonStore.id ? updatedColor : color
			)
		);

		localStorage.setItem('colorButtons', JSON.stringify($colorButtonsStore));
		closeUpdateModal();
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
