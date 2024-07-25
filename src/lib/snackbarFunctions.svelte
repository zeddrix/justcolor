<script context="module" lang="ts">
	import { snackbarStore } from './store';

	export const openAppendSnackbar = () => {
		snackbarStore.set({
			text: 'New color button added',
			open: true
		});
	};

	export const openDuplicateSnackbar = () => {
		snackbarStore.set({
			text: 'Color button duplicated',
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
