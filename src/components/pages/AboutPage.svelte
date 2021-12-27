<script>
	import { onMount } from 'svelte';

	onMount(() => (document.body.style.backgroundColor = 'white'));
</script>

<div>
	<div class="heading">
		<h1>About JustColor!</h1>
		<h2>Version: 1.5.0</h2>
	</div>

	<br />

	<h2>What's New</h2>
	<ul>
		<li>Enhanced animation</li>
		<li>You can now delete/update initial buttons</li>
		<li>You can now duplicate color buttons</li>
		<li>Double click/tap to edit a color button</li>
		<li>Palette stays opened/closed</li>
		<li>Snackbars popup when actions done</li>
	</ul>
</div>

<style>
	div {
		width: 75vw;
	}

	.heading {
		text-align: center;
	}

	h1 {
		margin-bottom: 0;
	}
	h2 {
		margin-top: 0;
	}
</style>
