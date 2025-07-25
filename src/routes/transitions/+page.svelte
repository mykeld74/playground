<script>
	import Card from '$components/card.svelte';
	import { Num1, Num2, Num3, Num4 } from '$img';
	import { fly } from 'svelte/transition';
	import { swing } from '$lib/transitions';

	let transitionIn = $state('forward');
	
	let transitionOut = $state('reverse');
	

	const cards = [
		{ src: Num1, altTag: 'Random Image 1' },
		{ src: Num2, altTag: 'Random Image 2' },
		{ src: Num3, altTag: 'Random Image 3' },
		{ src: Num4, altTag: 'Random Image 4' }
	];
	let currentCard = $state(0);

	function nextCard() {
		transitionIn = 'forward';
		transitionOut = 'reverse';
		setTimeout(() => {
			currentCard = (currentCard + 1) % cards.length;
		}, 5);
	}

	function backCard() {
		transitionIn = 'reverse';
		transitionOut = 'forward';
		setTimeout(() => {
			currentCard = (currentCard - 1 + cards.length) % cards.length;
		}, 5);
	}
</script>

<div>
	<div class="header"><h1>Transitions</h1></div>
	<div class="container">
		<button class="backButton button" onclick={backCard}>&larr;</button>
		<div class="cardContainer">
			{#each [cards[currentCard]] as card}
				{#key card}
					<div
						in:swing={{ duration: 350, direction: transitionIn }}
						out:swing={{ duration: 350, direction: transitionOut }}
						class="cardWrapper"
					>
						<Card src={card.src} altTag={card.altTag} />
					</div>
				{/key}
			{/each}
		</div>
		<button class="nextButton button" onclick={nextCard}>&rarr;</button>
	</div>
</div>

<style lang="postcss">
	.header {
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
	.container {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button {
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: none;
		cursor: pointer;
		font-size: 2rem;
		margin: 0 1rem;
	}
	.cardContainer {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 1fr;
		grid-template-areas: 'card';
		gap: 20px;
		width: calc(100% - 120px);
		max-width: 600px;
		overflow: clip;
	}
	.cardWrapper {
		grid-area: card;
	}
</style>
