<script>
	import { pageBgColorStore } from '$lib/store';
	import { onMount } from 'svelte';

	export const changeToArbitraryColor = () => {
		let pageBgColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = pageBgColor;
		pageBgColorStore.set(pageBgColor);
	};

	onMount(() => changeToArbitraryColor());
</script>

<button class="arbitrary-btn color-btn" on:mousedown={changeToArbitraryColor} />

<style>
	.arbitrary-btn {
		background: conic-gradient(from 45deg, red, blue, green, yellow, red);
	}

	.arbitrary-btn:active {
		transition: all 0.01s;
		/* background: conic-gradient(from 45deg, blue, green, yellow, red, blue); */
		box-shadow: inset 0px 1px 0px grey, 0px 2px 0px 0px lightgrey, 0px 2px 5px #999;
	}
</style>
