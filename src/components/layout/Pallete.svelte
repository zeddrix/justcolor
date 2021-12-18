<script>
	import AppendBtn from '$components/colorBtns/AppendBtn.svelte';
	import ArbitraryBtn from '$components/colorBtns/ArbitraryBtn.svelte';
	import ColorButtons from '$components/colorBtns/ColorButtons.svelte';
</script>

<div class="palette">
	<AppendBtn />
	<ArbitraryBtn />
	<ColorButtons />
</div>

<style>
	@keyframes paletteFadeIn {
		0% {
			visibility: hidden;
			opacity: 0;
			transform: scale(0.9);
			-webkit-transform: scale(0.9);
			transform-origin: 50% 50%;
			-webkit-transform-origin: 50% 50%;
		}
		50% {
			opacity: 1;
			visibility: visible;
			transform: scale(1);
		}
	}

	.palette {
		border-top: 2px solid lightgrey;
		height: 32vh;
		background: rgba(0, 0, 0, 0.6);
		width: 90vw;
		bottom: 2.75rem;
		border-radius: 10px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-end;
		padding: 0.75rem 0.5rem;
		position: absolute;
		overflow-y: auto;
		overflow-x: hidden;
		animation: paletteFadeIn ease-in 0.2s;
		box-shadow: 0px 5px 10px black;
	}
</style>
