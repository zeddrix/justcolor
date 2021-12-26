<script>
	import { editModalOpenStore } from '$lib/store';

	import Modal from './Modal.svelte';
</script>

<Modal
	bind:open={$editModalOpenStore}
	modalType="edit"
	modalLabel="Edit your color button's name:"
	button1Class="delete"
	button2Class="done"
	button1Name="Delete"
	button2Name="Done"
/>
