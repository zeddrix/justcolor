<script lang="ts">
	import Tooltip, { Wrapper, Link } from '@smui/tooltip';
	import MoreToggleButton from './MoreToggleButton.svelte';
	import ShareButtons from './Share/ShareButtons.svelte';
</script>

<div class="more-wrapper">
	<Wrapper rich>
		<span role="button" tabindex="0">
			<MoreToggleButton />
		</span>
		<Tooltip xPos="center" yPos="below" persistent>
			<p class="more-p">More</p>
			<p class="more__header">About</p>
			<p class="more__info">
				JustColor is created by{' '}
				<a class="more__info-link" href="https://zeddrix.com/about-zedd/" target="__blank__">
					Zeddrix Fabian</a
				>. Learn more about JustColor{' '}
				<Link href="/about" target="_blank">
					<span class="more__info-link">here</span></Link
				>.
			</p>
			<p class="more__header">Share</p>
			<p class="more__info">Share this app with your family and friends!</p>
			<br />
			<ShareButtons />
		</Tooltip>
	</Wrapper>
</div>

<style>
	.more-wrapper {
		height: 90vh;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		color: black;
	}

	:global(.mdc-tooltip__surface) {
		margin: 2rem 2rem 0.5rem 2rem;
		background: black !important;
		overflow: auto;
		background: black;
		border-radius: 7.5px;
		width: 20rem;
		padding: 0.75rem;
		box-shadow: 5px 5px 15px black;
	}

	.more__header,
	.more-p {
		font-family: sans-serif;
		color: whitesmoke;
		text-decoration: none;
		margin: 0.5rem;
	}

	.more-p {
		font-size: 1rem;
		color: #aaaaaa;
		border-bottom: 1px solid grey;
		padding-bottom: 7.5px;
		width: 94%;
	}

	.more__header {
		font-size: 1.3rem;
		text-align: left;
		margin: 0.75rem 1.5rem 0.5rem 1.75rem;
	}

	.more__info {
		font-family: sans-serif;
		color: #cccccc;
		text-decoration: none;
		text-align: left;
		margin: 0 1.75rem;
		font-size: 1rem;
	}

	.more__info-link {
		color: #ff4684;
		text-decoration: none;
	}

	.more__info-link:hover,
	.more__info-link:focus {
		color: #ff0055;
		text-decoration: underline;
	}

	/* MOBILE */
	@media only screen and (max-width: 319px) {
		.more-p {
			font-size: 0.8rem;
		}
		.more__header {
			font-size: 1rem;
			margin: 0.5rem 1rem;
		}
		.more__info {
			font-size: 0.8rem;
			margin: 0.5rem 1rem;
			margin-bottom: 1rem;
		}
	}
</style>
