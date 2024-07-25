<script>
	let open = false;
</script>

<div id="more__toggle-btn">
	<span class={'circle ' + (open ? 'transparent' : 'colored')} />
	<span class={'circle ' + (open ? 'transparent' : 'colored')} />
	<span class={'circle ' + (open ? 'transparent' : 'colored')} />
</div>

<style>
	.colored {
		background-color: whitesmoke;
	}

	.transparent {
		background-color: transparent;
	}

	.more__toggle-btn__div {
		/* border: 2px solid white; */
		width: 100%;
		height: 8vh;
		padding: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: transparent;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	#more__toggle-btn {
		cursor: pointer;
		padding: 0.5rem 0;
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	@media only screen and (min-width: 768px) {
		/* IPAD */
		#more__toggle-btn {
			margin-right: 1rem;
		}
	}
	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		#more__toggle-btn {
			margin-right: 1.25rem;
		}
	}
	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		#more__toggle-btn {
			margin-right: 1rem;
		}
	}

	.circle {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		display: block;
		margin: 0 2px;
		border: 1px solid whitesmoke;
		box-shadow: 1px 1px 3px #505050;
	}
	@media only screen and (min-width: 1200px) {
		/* DESKTOP */
		.circle {
			width: 7px;
			height: 7px;
			margin: 0 2px;
		}
	}
	@media only screen and (max-width: 319px) {
		/* MOBILE */
		.circle {
			width: 5px;
			height: 5px;
			margin: 0 1px;
		}
	}
	@media only screen and (min-width: 768px) {
		/* IPAD */
		.circle {
			width: 10px;
			height: 10px;
			margin: 0 3px;
		}
	}
	@media only screen and (min-width: 1024px) and (min-height: 1360px) {
		/* IPAD PRO */
		.circle {
			width: 15px;
			height: 15px;
			margin: 0 3px;
		}
	}
</style>
