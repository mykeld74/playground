<script>
	import { HealthAnimation } from '$img';
	let isLoaded = false;
	setTimeout(() => {
		isLoaded = true;
	}, 250);
</script>

<svelte:head>
	<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
</svelte:head>

<div class="container">
	{#if isLoaded}
		<lottie-player src={HealthAnimation} loop autoplay class="lottie" />
	{/if}
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		height: 100vh;
	}
	.lottie {
		width: 300px;
		height: 300px;
	}
</style>
