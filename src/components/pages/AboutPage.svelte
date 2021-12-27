<script>
	import { onMount } from 'svelte';
	import BackButton from '$components/BackButton.svelte';

	onMount(() => (document.body.style.backgroundColor = 'white'));
</script>

<div>
	<div class="body">
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

	<BackButton />
</div>

<style>
	div {
		width: 75vw;
	}

	.body {
		position: absolute;
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
