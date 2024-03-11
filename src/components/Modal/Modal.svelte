<script lang="ts">
	import { modalInputValueStore } from '$lib/store';

	import Dialog, { Actions } from '@smui/dialog';
	import './Modal.css';

	export let open = false;
	export let modalLabel: string;
	export let modalType: 'append' | 'update';
	export let button1Class: 'cancel' | 'delete';
	export let button2Class: 'add' | 'done';
	export let button1Name: 'Cancel' | 'Delete';
	export let button2Name: 'Add!' | 'Duplicate' | 'Done';
	export let onButton1Click;
	export let onButton2Click;
</script>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
	<p class="modal__description">{modalLabel}</p>
	<input
		class={`${modalType}-modal__input input-field`}
		type="text"
		maxLength="16"
		placeholder="Enter name..."
		bind:value={$modalInputValueStore}
		on:keydown
	/>
	<br />
	<Actions>
		<button class={`${button1Class}-btn modal-btn`} on:click={onButton1Click}>
			{button1Name}
		</button>
		<button class={`${button2Class}-btn modal-btn`} on:click={onButton2Click}>{button2Name}</button>
	</Actions>
</Dialog>
