<script>
	import { colorButtonIdStore, colorButtonsStore, updateModalOpenStore } from '$lib/store';

	import Modal from './Modal.svelte';

	const closeUpdateModal = () => {
		updateModalOpenStore.set(false);
	};

	const deleteColor = () => {
		colorButtonsStore.set($colorButtonsStore.filter((color) => color.id !== $colorButtonIdStore));

		localStorage.setItem('colorButtons', JSON.stringify($colorButtonsStore));
		closeUpdateModal();
	};
</script>

<Modal
	bind:open={$updateModalOpenStore}
	on:keydown={(e) => e.key === 'Enter' && deleteColor()}
	modalType="update"
	modalLabel="Update color button's name:"
	button1Class="delete"
	button2Class="done"
	button1Name="Delete"
	button2Name="Done"
	onButton1Click={deleteColor}
	onButton2Click={closeUpdateModal}
/>
