<script context="module">
	import { colorDuplicatedStore, pageBgColorStore } from '$lib/store';

	export const changeToArbitraryColor = () => {
		// hex variation
		// let pageBgColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);

		// rgb variation
		let num = Math.round(0xffffff * Math.random());
		let r = num >> 16;
		let g = (num >> 8) & 255;
		let b = num & 255;
		let pageBgColor = `rgb(${r}, ${g}, ${b})`;

		document.body.style.backgroundColor = pageBgColor;

		pageBgColorStore.set(pageBgColor);
		colorDuplicatedStore.set(false);
	};
</script>
