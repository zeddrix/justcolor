<script lang="ts">
	import { editModalOpenStore, newColorButtonsStore, pageBgColorStore } from '$lib/store';

	import { initialColors } from './initialColors';

	const changeColor = (colorRgb: string) => {
		document.body.style.backgroundColor = colorRgb;

		pageBgColorStore.set(colorRgb);
	};

	const openEditModal = () => editModalOpenStore.set(true);
</script>

{#each initialColors as { name, rgb, id }}
	<button
		style={`background: ${rgb}`}
		on:mousedown={() => changeColor(rgb)}
		on:dblclick={openEditModal}
		class={rgb === 'rgb(0, 0, 0)' ? 'color-btn black word-break' : 'color-btn word-break'}
	>
		{name}
	</button>
{/each}

{#each $newColorButtonsStore as { name, rgb, id }}
	<button
		style={`background: ${rgb}`}
		on:mousedown={() => changeColor(rgb)}
		on:dblclick={openEditModal}
		class={rgb === 'rgb(0, 0, 0)' ? 'color-btn black word-break' : 'color-btn word-break'}
	>
		{name}
	</button>
{/each}

<style>
	:global(.color-btn) {
		font-family: inherit;
		font-size: 1rem;
		line-height: 0.9;
		width: 4.1rem;
		height: 4.1rem;
		margin: 0.45rem 0.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.4s;
		border: none;
		outline: none;
		text-decoration: none;
		text-align: center;
		cursor: pointer;
		text-shadow: 0 -1px 0px rgba(0, 0, 0, 0.3);
		box-shadow: inset 0px 1px 0px grey, 0px 5.3px 0px 0px lightgrey, 0px 9px 6px #999;
	}
	:global(.color-btn:hover) {
		color: #ccc;
	}
	:global(.color-btn:not(.arbitrary-btn):focus) {
		color: #dfe7ea;
		box-shadow: inset 0px 1px 0px grey, 0px 2px 0px 0px lightgrey, 0px 2px 5px #999;
	}
	@media only screen and (max-width: 319px) {
		/* MOBILE */
		:global(.color-btn) {
			width: 3rem;
			height: 3rem;
			margin: 0.25rem;
			font-size: 0.7rem;
			box-shadow: inset 0px 1px 0px grey, 0px 3.2px 0px 0px lightgrey, 0px 7px 5px #999;
		}
	}
	@media only screen and (min-width: 550px) {
		/* AMAZON TABLETS */
		:global(.color-btn) {
			width: 5rem;
			height: 5rem;
			font-size: 1.1rem;
			margin: 0.6rem 0.4rem;
			box-shadow: inset 0px 1px 0px grey, 0px 6px 0px 0px lightgrey, 0px 14px 10px #999;
		}
	}
	@media only screen and (min-width: 768px) {
		/* IPAD */
		:global(.color-btn) {
			width: 6rem;
			height: 6rem;
			font-size: 1.4rem;
			margin: 0.7rem 0.4rem;
			box-shadow: inset 0px 1px 0px grey, 0px 7px 0px 0px lightgrey, 0px 15px 10px #999;
		}
	}
	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		:global(.color-btn) {
			width: 6rem;
			height: 6rem;
			font-size: 1.4rem;
			margin: 0.7rem 0.4rem;
			box-shadow: inset 0px 1px 0px grey, 0px 7px 0px 0px lightgrey, 0px 15px 10px #999;
		}
	}
	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		:global(.color-btn) {
			width: 4.5rem;
			height: 4.5rem;
			font-size: 1rem;
			margin: 0.5rem;
			box-shadow: inset 0px 1px 0px grey, 0px 6px 0px 0px lightgrey, 0px 10px 10px #999;
		}
	}
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
