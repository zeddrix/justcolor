<script lang="ts">
	import { pageBgColorStore } from '$lib/store';

	import { initialColors } from './InitialColors';

	const changeColor = (colorRgb: string) => {
		document.body.style.backgroundColor = colorRgb;

		pageBgColorStore.set(colorRgb);
	};
</script>

{#each initialColors as { name, rgb, id }}
	<button
		style={`background: ${rgb}`}
		on:mousedown={() => changeColor(rgb)}
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
