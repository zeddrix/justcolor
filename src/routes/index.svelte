<script>
	import { v4 as uuid } from 'uuid';
	import { onMount } from 'svelte';

	import {
		appendModalOpenStore,
		editModalOpenStore,
		modalInputValueStore,
		colorButtonsStore,
		pageBgColorStore
	} from '$lib/store';
	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';

	import PaletteButton from '$components/layout/PaletteButton.svelte';
	import Pallete from '$components/layout/Pallete.svelte';
	import Modal from '$components/Modal/Modal.svelte';

	import '../global.css';

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

		const newColorButtonsSet = [...$colorButtonsStore, newColor];

		colorButtonsStore.set(newColorButtonsSet);

		localStorage.setItem('colorButtons', JSON.stringify(newColorButtonsSet));

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
