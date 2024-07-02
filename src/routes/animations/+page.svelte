<script>
	import { HealthAnimation } from '$img';
	let isLoaded = false;
	setTimeout(() => {
		isLoaded = true;
	}, 50);
</script>

<svelte:head>
	<script src="/node_modules/@lottiefiles/lottie-player/dist/lottie-player.js"></script>
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
