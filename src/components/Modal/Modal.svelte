<script lang="ts">
	import Dialog, { Actions } from '@smui/dialog';
	import './Modal.css';

	export let open = false;
	export let modalLabel: string;
	export let modalType: 'append' | 'edit';
	export let button1Class: 'cancel' | 'delete';
	export let button2Class: 'add' | 'done';
	export let button1Name: 'Cancel' | 'Delete';
	export let button2Name: 'Add!' | 'Done';
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<p class="modal__description">{modalLabel}</p>
	<input
		class={`${modalType}-modal__input input-field`}
		type="text"
		maxLength="16"
		placeholder="Enter name..."
	/>
	<br />
	<Actions>
		<div class={`${button1Class}-btn modal-btn`}>{button1Name}</div>
		<div class={`${button2Class}-btn modal-btn`}>{button2Name}</div>
	</Actions>
</Dialog>

<style>
	.append-modal__input:focus {
		box-shadow: 0 0 5px green;
	}
	@media only screen and (min-width: 550px) {
		/* All other devices from AMAZON TABLETS */
		.append-modal__input:focus {
			box-shadow: 0 0 10px green;
		}
	}
</style>
