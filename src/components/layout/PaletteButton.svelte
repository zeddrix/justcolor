<script>
	import { onMount } from 'svelte';
	import { paletteOpenStore } from '$lib/store';

	const paletteOpen = () => {
		const colorPaletteOpen = localStorage.getItem('colorPaletteOpen');

		if (colorPaletteOpen) {
			paletteOpenStore.set(JSON.parse(colorPaletteOpen));
		} else {
			paletteOpenStore.set(true);
		}
	};

	onMount(() => paletteOpen());

	const togglePaletteButton = () => {
		paletteOpenStore.set(!$paletteOpenStore);

		localStorage.setItem('colorPaletteOpen', JSON.stringify($paletteOpenStore));

		paletteOpen();
	};
</script>

<button class="palette-toggle-btn" on:click={togglePaletteButton}>
	{$paletteOpenStore ? '▼' : '▲'}
</button>

<style>
	.palette-toggle-btn {
		cursor: pointer;
		border-radius: 4rem;
		font-size: 0.8rem;
		padding: 0.25rem 1.75rem;
		bottom: 0.5rem;
		position: absolute;
		border: none;
	}

	.palette-toggle-btn,
	.palette-toggle-btn:hover {
		background: #0000004d;
		color: #00000080;
	}

	.palette-toggle-btn:active {
		cursor: pointer;
		background: #00000080;
		color: black;
	}

	@media only screen and (max-width: 319px) {
		/* MOBILE */
		.palette-toggle-btn {
			font-size: 0.75rem;
			bottom: 0.3rem;
		}
	}

	@media only screen and (min-width: 550px) {
		/* AMAZON TABLETS */
		.palette-toggle-btn {
			font-size: 1.5rem;
			bottom: 0.75rem;
			padding: 0 2rem;
		}
	}

	@media only screen and (min-width: 768px) {
		/* IPAD */
		.palette-toggle-btn {
			font-size: 1.25rem;
			bottom: 0.75rem;
			padding: 0 2rem;
		}
	}

	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		.palette-toggle-btn {
			font-size: 1.8rem;
			bottom: 0.85rem;
			padding: 0.1rem 3rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		.palette-toggle-btn,
		.palette-toggle-btn:hover {
			border-radius: 4rem;
			font-size: 1rem;
			padding: 0.1rem 1.75rem;
			bottom: 0.5rem;
		}
		.palette-toggle-btn:active {
			cursor: pointer;
			background: #00000080;
			color: black;
		}
	}
</style>
