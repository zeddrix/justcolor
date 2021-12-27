<script>
	import { onMount } from 'svelte';

	import { changeToArbitraryColor } from '$lib/changeToArbitraryColor.svelte';
	import { appendModalOpenStore, modalInputValueStore, updateModalOpenStore } from '$lib/store';

	import PaletteButton from '$components/layout/PaletteButton.svelte';
	import Pallete from '$components/layout/Pallete.svelte';
	import AppendModal from '$components/Modal/AppendModal.svelte';
	import UpdateModal from '$components/Modal/UpdateModal.svelte';
	import Snackbar from '$components/layout/Snackbar.svelte';

	import '../global.css';

	onMount(() => changeToArbitraryColor());

	$: if (!$appendModalOpenStore && !$updateModalOpenStore) {
		modalInputValueStore.set('');
	}
</script>

<svelte:head>
	<title>JustColor!</title>
</svelte:head>

<AppendModal />
<UpdateModal />

<Pallete />
<PaletteButton />

<Snackbar />
