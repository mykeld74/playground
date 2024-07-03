<script>
	import { HealthAnimation } from '$img';
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
	let isLoaded = false;
	setTimeout(() => {
		isLoaded = true;
	}, 50);
</script>

<header>
	<h1>Animations</h1>
</header>
<div class="container">
	{#if isLoaded}
		<LottiePlayer src={HealthAnimation} loop autoplay width={500} />
	{/if}
</div>

<style>
	.container {
		display: grid;
		place-items: center;
		height: 80vh;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		background-color: #f5f5f5;
		color: #333;
		font-size: 24px;
		h1 {
			margin: 0;
		}
	}
</style>
