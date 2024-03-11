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

		<h2>Purpose</h2>
		<p>
			Back in 2019, we were surprised to know that we will have a younger baby sister, 17 years
			younger than I am! Of course, we as older siblings (besides our parents), also have the
			responsibility of teaching the youngest member of our family. And there came the idea thought
			by my dad of creating a website/web app that can teach my baby sister the names of the
			different colors and play around with it. Just color!
		</p>

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

	<br />

	<BackButton />
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
