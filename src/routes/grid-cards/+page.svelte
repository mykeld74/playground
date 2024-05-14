<script>
	import { Num4, Num8, Num17, Num18 } from '$img';

	const cards = [
		{
			id: 1,
			title: 'Card 1',
			content: 'This is the first card.',
			img: Num4
		},
		{
			id: 2,
			title: 'Card 2',
			content: 'This is the second card.',
			img: Num8
		},
		{
			id: 3,
			title: 'Card 3',
			content: 'This is the third card.',
			img: Num17
		},
		{
			id: 4,
			title: 'Card 4',
			content: 'This is the fourth card.',
			img: Num18
		}
	];
</script>

<div class="wrapper">
	<div class="container">
		{#each cards as card}
			<input type="checkbox" name={`card${card.id}`} id={`c${card.id}`} />
			<label for={`c${card.id}`} class={`card card${card.id}`}>
				<div class="row">
					<div class="icon">{card.id}</div>
					<div class="description">
						<h4>{card.title}</h4>
						<p>{card.content}</p>
					</div>
				</div>
				<img src={card.img} alt={card.title} class="image" />
			</label>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
	input[type='checkbox'] {
		display: none;
	}
	.container {
		width: 80%;
		max-width: 1100px;
		max-height: 90vh;
		display: grid;
		grid-template-columns: [full-start col1-start] 1fr [col1-end col2-start] 1fr [col2-end full-end];
		grid-template-rows: [full-start row1-start] 1fr [row1-end row2-start] 1fr [row2-end full-end];
		gap: 20px;
	}
	.card {
		display: grid;
		grid-template-columns: 1fr;
		border-radius: 18px;
		background: white;
		box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
		text-align: center;
		transition: 0.5s ease;
		overflow: clip;
		position: relative;
		aspect-ratio: 16/9;
		transition: all 0.9s ease;
	}
	.card1 {
		grid-column: 1 / 1;
		grid-row: 1 / 1;
	}
	.card2 {
		grid-column: 2;
		grid-row: 1;
	}
	.card3 {
		grid-column: 1;
		grid-row: 2;
	}
	.card4 {
		grid-column: 2;
		grid-row: 2;
	}
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		z-index: 0;
	}
	.row {
		position: relative;
		z-index: 1;
		align-self: end;
	}

	input:checked + label {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
		z-index: 3;
		transition: all 0.9s ease;
	}
</style>
