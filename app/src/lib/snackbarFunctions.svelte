<script context="module">
	import { snackbarStore } from './store';

	export const openAppendSnackbar = () => {
		snackbarStore.set({
			text: 'New color button added',
			open: true
		});
	};

	export const openDeleteSnackbar = () => {
		snackbarStore.set({
			text: 'Color button deleted',
			open: true
		});
	};

	export const openUpdateSnackbar = () => {
		snackbarStore.set({
			text: 'Color button updated',
			open: true
		});
	};
</script>
