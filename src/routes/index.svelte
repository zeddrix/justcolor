<script>
	import Pallete from '$components/layout/Pallete.svelte';
	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';
	import { onMount } from 'svelte';
	import '../global.css';

	onMount(() => changeToArbitraryColor());
</script>

<svelte:head>
	<title>JustColor!</title>
</svelte:head>

<Pallete />
