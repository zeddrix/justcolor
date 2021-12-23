<script>
	import { onMount } from 'svelte';

	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';

	import PaletteButton from '$components/layout/PaletteButton.svelte';
	import Pallete from '$components/layout/Pallete.svelte';

	import '../global.css';

	onMount(() => changeToArbitraryColor());
</script>

<svelte:head>
	<title>JustColor!</title>
</svelte:head>

<Pallete />
<PaletteButton />
