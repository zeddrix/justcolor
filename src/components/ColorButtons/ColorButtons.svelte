<script lang="ts">
	import { onMount } from 'svelte';

	import {
		updateModalOpenStore,
		colorButtonsStore,
		pageBgColorStore,
		colorButtonToUpdateStore,
		modalInputValueStore
	} from '$lib/store';
	import { initialColors } from './initialColors';

	import './ColorButtons.css';

	onMount(() => {
		let colorButtons = JSON.parse(localStorage.getItem('colorButtons'));

		if (!colorButtons) {
			colorButtons = [...initialColors];
			localStorage.setItem('colorButtons', JSON.stringify(colorButtons));
		}

		colorButtonsStore.set(colorButtons);
	});

	const changeColor = (colorRgb: string) => {
		document.body.style.backgroundColor = colorRgb;
		pageBgColorStore.set(colorRgb);
	};

	const openUpdateModal = (name: string, rgb: string, id: string) => {
		updateModalOpenStore.set(true);

		const colorButtonToUpdate = { name, rgb, id };
		colorButtonToUpdateStore.set(colorButtonToUpdate);
		modalInputValueStore.set(name);
	};
</script>

{#each $colorButtonsStore as { name, rgb, id }}
	<button
		style={`background: ${rgb}`}
		on:mousedown={() => changeColor(rgb)}
		on:dblclick={() => openUpdateModal(name, rgb, id)}
		class={rgb === 'rgb(0, 0, 0)' ? 'color-btn black word-break' : 'color-btn word-break'}
	>
		{name}
	</button>
{/each}

<style>
	.word-break {
		/* for long color names */
		word-break: break-word;
	}

	.black {
		background: black;
		color: rgb(218, 218, 218);
	}
	.black:hover,
	.black:focus {
		color: rgb(160, 160, 160);
	}
</style>
