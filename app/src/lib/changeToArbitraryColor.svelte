<script context="module">
	import { pageBgColorStore } from '$lib/store';

	export const changeToArbitraryColor = () => {
		let pageBgColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
		document.body.style.backgroundColor = pageBgColor;

		pageBgColorStore.set(pageBgColor);
	};
</script>
