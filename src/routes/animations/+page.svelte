<script>
	import { HealthAnimation } from '$img';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
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
		<LottiePlayer src={HealthAnimation} loop autoplay width={500} />
	{/if}
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		height: 100vh;
	}
</style>
