<script>
	// import { slide } from 'svelte/transition';
	// import { quintOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { paletteOpenStore } from '$lib/store';

	import AppendButton from '$components/ColorButtons/AppendButton.svelte';
	import ArbitraryButton from '$components/ColorButtons/ArbitraryButton.svelte';
	import ColorButtons from '$components/ColorButtons/ColorButtons.svelte';
</script>

{#if $paletteOpenStore}
	<!-- <div class="palette" transition:slide={{ delay: 250, duration: 300, easing: quintOut }}> -->
	<div class="palette" transition:fade={{ duration: 200 }}>
		<ArbitraryButton />
		<AppendButton />
		<ColorButtons />
	</div>
{/if}

<style>
	@keyframes paletteFadeIn {
		0% {
			visibility: hidden;
			opacity: 0;
			transform: scale(0.9);
			-webkit-transform: scale(0.9);
			transform-origin: 50% 50%;
			-webkit-transform-origin: 50% 50%;
		}
		50% {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
		}
	}

	.palette {
		border-top: 2px solid lightgrey;
		height: 32vh;
		background: rgba(0, 0, 0, 0.6);
		width: 90vw;
		bottom: 2.75rem;
		border-radius: 10px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-end;
		padding: 0.75rem 0.5rem;
		position: absolute;
		overflow-y: auto;
		overflow-x: hidden;
		/* animation: paletteFadeIn ease-in 0.2s; */
		box-shadow: 0px 5px 10px black;
	}

	@media only screen and (max-width: 319px) {
		/* MOBILE */
		.palette {
			height: 33vh;
			width: 90vw;
			bottom: 2.25rem;
			padding: 0.5rem;
		}
	}

	@media only screen and (min-width: 550px) {
		/* AMAZON TABLETS */
		.palette {
			height: 30vh;
			border-top: 4px solid lightgrey;
			bottom: 4rem;
		}
		.palette::-webkit-scrollbar {
			width: 7.5px;
		}
	}

	@media only screen and (min-width: 768px) {
		/* IPAD */
		.palette {
			height: 30vh;
			width: 90vw;
			border-top: 5px solid lightgrey;
			bottom: 4rem;
			border-radius: 15px;
		}
		.palette::-webkit-scrollbar {
			width: 9px;
		}
	}

	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		.palette {
			height: 29vh;
			width: 90vw;
			border-top: 5px solid lightgrey;
			bottom: 5rem;
			border-radius: 15px;
		}
		.palette::-webkit-scrollbar {
			width: 10px;
		}
	}

	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		.palette {
			height: 7rem;
			border-top: 3px solid lightgrey;
			bottom: 3rem;
		}
		.palette::-webkit-scrollbar {
			width: 5px;
		}
	}
</style>
