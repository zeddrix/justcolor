<script lang="ts">
	import {
		updateModalOpenStore,
		colorButtonsStore,
		pageBgColorStore,
		colorButtonIdStore
	} from '$lib/store';
	import { onMount } from 'svelte';

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

	const openUpdateModal = (id: string) => {
		updateModalOpenStore.set(true);
		colorButtonIdStore.set(id);
	};
</script>

{#each $colorButtonsStore as { name, rgb, id }}
	<button
		style={`background: ${rgb}`}
		on:mousedown={() => changeColor(rgb)}
		on:dblclick={() => openUpdateModal(id)}
		class={rgb === 'rgb(0, 0, 0)' ? 'color-btn black word-break' : 'color-btn word-break'}
	>
		{name}
	</button>
{/each}

<style>
	/* for long color names */
	.word-break {
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
