<script>
	import { pageBgColorStore } from '$lib/store';
</script>

<button class="append-btn color-btn" style={`background: ${$pageBgColorStore}`}> + </button>

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
</style>
