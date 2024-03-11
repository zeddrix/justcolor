<script>
	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';

	import './ColorButtons.css';
</script>

<button class="arbitrary-btn color-btn" on:mousedown={changeToArbitraryColor} />

<style>
	.arbitrary-btn {
		background: conic-gradient(from 45deg, red, blue, green, yellow, red);
	}
	.arbitrary-btn:active {
		transition: all 0.01s;
		box-shadow: inset 0px 1px 0px grey, 0px 2px 0px 0px lightgrey, 0px 2px 5px #999;
		/* background: conic-gradient(from 45deg, blue, green, yellow, red, blue); */
	}
</style>
