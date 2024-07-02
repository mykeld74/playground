<script>
	const cards = [
		{
			id: 1,
			title: 'Card 1',
			content: 'This is the first card.'
		},
		{
			id: 2,
			title: 'Card 2',
			content: 'This is the second card.'
		},
		{
			id: 3,
			title: 'Card 3',
			content: 'This is the third card.'
		},
		{
			id: 4,
			title: 'Card 4',
			content: 'This is the fourth card.'
		}
	];
</script>

<div class="wrapper">
	<div class="container">
		{#each cards as card}
			<input type="radio" name="slide" id={`c${card.id}`} checked={card.id === 1 ? true : false} />
			<label for={`c${card.id}`} class={`card card${card.id}`}>
				<div class="row">
					<div class="icon">{card.id}</div>
					<div class="description">
						<h4>{card.title}</h4>
						<p>{card.content}</p>
					</div>
				</div>
			</label>
		{/each}
	</div>
</div>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 0%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 100%;
		}
	}

	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-image: var(--gradient-7);
		background-size: cover;
		/* animation: gradient 5s ease infinite; */
	}

	.container {
		height: 400px;
		display: flex;
		flex-wrap: no-wrap;
		justify-content: flex-start;
	}
	.card {
		width: 80px;
		border-radius: var(--radius-4);
		background-size: cover;
		cursor: pointer;
		margin: 0 10px;
		display: flex;
		align-items: flex-end;
		transition: 0.6s ease-in-out;
		box-shadow: var(--shadow-3);
		overflow: clip;
		> .row {
			color: #fff;
			display: flex;
			flex-wrap: no-wrap;
			background: transparent;
			transition: background 0.5s ease-in-out;

			> .icon {
				background: #223;
				width: 50px;
				border-radius: var(--radius-round);
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 1.5rem;
				margin: 15px;
			}

			> .description {
				display: flex;
				justify-content: center;
				flex-direction: column;
				overflow: clip;
				height: 80px;
				width: 520px;
				opacity: 0;
				transform: translateX(80px);
				transition: all 0.3s var(--ease-out-1);
				transition-delay: 0.3s;
			}
		}
	}
	.description {
		p {
			padding-top: 5px;
			margin: 0;
		}
		h4 {
			margin: 0;
			text-transform: uppercase;
		}
	}
	input {
		display: none;
	}
	input:checked + label {
		width: 600px;
		box-shadow: var(--shadow-5);
		transition: 0.4s var(--ease-elastic-in-out-1);
		> .row {
			background: rgba(0, 0, 0, 0.6);
			> .description {
				opacity: 1;
				transform: translateX(0px);
			}
		}
	}
	.card1 {
		background: url('../../images/cover/safari-19.jpg') center / cover no-repeat;
	}
	.card2 {
		background: url('../../images/cover/safari-24.jpg') center 0 / cover no-repeat;
	}
	.card3 {
		background: url('../../images/cover/safari-5.jpg') center 0 / cover no-repeat;
	}
	.card4 {
		background: url('../../images/cover/safari-16.jpg') center / cover no-repeat;
	}
</style>
