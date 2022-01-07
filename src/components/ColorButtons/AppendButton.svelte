<script>
	import {
		appendModalOpenStore,
		colorButtonsStore,
		colorDuplicatedStore,
		pageBgColorStore
	} from '$lib/store';
	import './ColorButtons.css';

	const openAppendModal = () => {
		appendModalOpenStore.set(true);

		const duplicateColor = $colorButtonsStore.find((color) => color.rgb === $pageBgColorStore);

		colorDuplicatedStore.set(duplicateColor);
	};
</script>

<button
	class="append-btn color-btn"
	on:click={openAppendModal}
	style={`background: ${$pageBgColorStore}`}
>
	+
</button>

<style>
	.append-btn {
		color: black;
		font-family: MPLUSRounded1c;
		transition: all 0.5s ease;
		font-size: 1.4rem;
	}
	.append-btn:active {
		transition: all 0.1s ease;
	}
	.append-btn:hover,
	.append-btn:focus {
		color: white;
	}
	@media only screen and (max-width: 319px) {
		/* MOBILE */
		.append-btn {
			font-size: 0.9rem;
		}
	}
	@media only screen and (min-width: 550px) {
		/* AMAZON TABLETS */
		.append-btn {
			font-size: 1.5rem;
		}
	}
	@media only screen and (min-width: 768px) {
		/* IPAD */
		.append-btn {
			font-size: 1.75rem;
		}
	}
	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		.append-btn {
			font-size: 2.3rem;
		}
	}
	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		.append-btn {
			font-size: 1.3rem;
		}
	}
</style>
