<script lang="ts">
	import ShareItem from './ShareItem.svelte';

	const shares = [
		{
			social: 'Facebook',
			link: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjustcolor.zeddrix.com%2F',
			svg: 'M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z'
		},
		{
			social: 'Pinterest',
			link: 'https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fjustcolor.zeddrix.com%2F&amp;media=https%3A%2F%2Fjustcolor.zeddrix.com%2F&amp;description=Hey%2C%20check%20out%20this%20cool%20web%20app%20and%20play%20with%20the%20vast%20varieties%20of%20colors!',
			svg: 'M12.14.5C5.86.5 2.7 5 2.7 8.75c0 2.27.86 4.3 2.7 5.05.3.12.57 0 .66-.33l.27-1.06c.1-.32.06-.44-.2-.73-.52-.62-.86-1.44-.86-2.6 0-3.33 2.5-6.32 6.5-6.32 3.55 0 5.5 2.17 5.5 5.07 0 3.8-1.7 7.02-4.2 7.02-1.37 0-2.4-1.14-2.07-2.54.4-1.68 1.16-3.48 1.16-4.7 0-1.07-.58-1.98-1.78-1.98-1.4 0-2.55 1.47-2.55 3.42 0 1.25.43 2.1.43 2.1l-1.7 7.2c-.5 2.13-.08 4.75-.04 5 .02.17.22.2.3.1.14-.18 1.82-2.26 2.4-4.33.16-.58.93-3.63.93-3.63.45.88 1.8 1.65 3.22 1.65 4.25 0 7.13-3.87 7.13-9.05C20.5 4.15 17.18.5 12.14.5z'
		},
		{
			social: 'Twitter',
			link: 'https://twitter.com/intent/tweet/?text=Hey%2C%20check%20out%20this%20cool%20web%20app%20and%20play%20with%20the%20vast%20varieties%20of%20colors!&amp;url=https%3A%2F%2Fjustcolor.zeddrix.com%2F',
			svg: 'M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z'
		},
		{
			social: 'Email',
			link: 'mailto:?subject=Hey%2C%20check%20out%20this%20cool%20web%20app%20and%20play%20with%20the%20vast%20varieties%20of%20colors!&amp;body=https%3A%2F%2Fjustcolor.zeddrix.com%2F',
			svg: 'M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z'
		}
	];
</script>

<div class="sharing-buttons">
	{#each shares as share (share)}
		<ShareItem {share} />
	{/each}
</div>

<style>
	.sharing-buttons {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
