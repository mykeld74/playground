<script>
	let { src, altTag } = $props();
</script>

<div class="card">
	<div class="card__image">
		<img {src} alt={altTag} />
	</div>
</div>

<style>
	.card {
		--card-height: 600px;
		--card-width: 600px;
		--card-border-radius: 0.5rem;
		--card-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
		--card-background: white;
		--card-image-border-radius: 0;
		--card-image-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
		--card-image-box-shadow-hover: 0 5px 20px 0px rgba(0, 0, 0, 0.3);
		--card-image-box-shadow-focus: 0 5px 20px 0px rgba(0, 0, 0, 0.5);

		display: flex;
		flex-direction: column;
		height: var(--card-height);
		width: var(--card-width);
		border-radius: var(--card-border-radius);
		background: var(--card-background);
		box-shadow: var(--card-box-shadow);
		color: #333;
	}

	.card__image {
		height: 100%;
		width: 100%;
		border-radius: var(--card-image-border-radius);
		box-shadow: var(--card-image-box-shadow);
		overflow: hidden;
	}
</style>
