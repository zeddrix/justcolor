<script>
	import { onMount } from 'svelte';

	import { v4 as uuid } from 'uuid';

	import {
		appendModalOpenStore,
		editModalOpenStore,
		modalInputValueStore,
		newColorButtonsStore,
		pageBgColorStore
	} from '$lib/store';
	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';

	import PaletteButton from '$components/layout/PaletteButton.svelte';
	import Pallete from '$components/layout/Pallete.svelte';

	import '../global.css';
	import Modal from '$components/Modal/Modal.svelte';

	onMount(() => changeToArbitraryColor());

	const closeAppendModal = () => {
		appendModalOpenStore.set(false);

		modalInputValueStore.set('');
	};

	const appendNewColor = () => {
		const newColor = {
			name: $modalInputValueStore,
			rgb: $pageBgColorStore,
			id: uuid()
		};

		newColorButtonsStore.set([...$newColorButtonsStore, newColor]);

		closeAppendModal();
	};
</script>

<svelte:head>
	<title>JustColor!</title>
</svelte:head>

<Pallete />
<PaletteButton />

<Modal
	bind:open={$appendModalOpenStore}
	onButton1Click={closeAppendModal}
	onButton2Click={appendNewColor}
	on:keydown={(e) => e.key === 'Enter' && appendNewColor()}
	modalType="append"
	modalLabel="Name your new color button:"
	button1Class="cancel"
	button2Class="add"
	button1Name="Cancel"
	button2Name="Add!"
/>

<Modal
	bind:open={$editModalOpenStore}
	modalType="edit"
	modalLabel="Edit your color button's name:"
	button1Class="delete"
	button2Class="done"
	button1Name="Delete"
	button2Name="Done"
/>
