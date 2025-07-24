<div class="buttonsContainer">
	<div class="buttonContainer">
		<p>Variation 1</p>
		<div class="buttonBg buttonBg1">
			<button class="button button1"><p>See My Results!</p></button>
		</div>
	</div>
	<div class="buttonContainer">
		<p>Variation 2</p>
		<button class="button button2"><p>See My Results!</p></button>
	</div>
	<div class="buttonContainer">
		<p>Variation 3</p>
		<button class="button button3"><p>See My Results!</p></button>
	</div>
	<div class="buttonContainer">
		<p>Variation 4</p>
		<button class="button button4"><p>See My Results!</p></button>
	</div>
	<div class="buttonContainer">
		<p>Variation 5</p>
		<button class="button button5"><p>See My Results!</p></button>
	</div>
	<div class="buttonContainer">
		<p>Variation 6</p>
		<button class="button button6"><p>See My Results!</p></button>
	</div>
	<div class="buttonContainer">
		<p>Variation 7</p>
		<button class="button button7"><p>See My Results!</p></button>
	</div>
</div>

<style>
	@keyframes rotateBg {
		0% {
			--conic-rotation: 0deg;
		}

		50% {
			--conic-rotation: 360deg;
		}

		100% {
			--conic-rotation: 0deg;
		}
	}

	@keyframes rotateBorder {
		100% {
			--conic-rotation: 360deg;
		}
	}
	@keyframes slideBackAndForth {
		0% {
			transform: translateX(0);
			height: 80%;
			top: 5px;
		}

		25% {
			height: calc(100% + 10px);
			top: -5px;
		}

		50% {
			transform: translateX(290px);
			height: 80%;
			top: 5px;
		}

		75% {
			height: calc(100% + 10px);
			top: -5px;
		}
		100% {
			transform: translateX(0);
			height: 80%;
			top: 5px;
		}
	}
	@keyframes slideBackAndForth1 {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(290px);
		}

		100% {
			transform: translateX(0);
		}
	}
	@keyframes slideBackAndForthReverse {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateX(-290px);
		}

		100% {
			transform: translateX(0);
		}
	}
	@keyframes slideUpAndDown {
		0% {
			transform: translateX(0);
		}

		50% {
			transform: translateY(48px);
		}

		100% {
			transform: translateX(0);
		}
	}
	@keyframes circle {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(290px) rotate(90deg);
			height: 310px;
		}
		50% {
			transform: translateX(0) rotate(180deg);
		}
		75% {
			transform: translateX(290px) rotate(270deg);
			height: 310px;
		}
		100% {
			transform: translateX(0) rotate(360deg);
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@property --conic-rotation {
		syntax: '<angle>';
		inherits: false;
		initial-value: 0deg;
	}
	.buttonsContainer {
		--borderRadius: 10px;
		--backgroundPadding: 5px;
		--conic-rotation: 0deg;
		color: #333;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 50px 20px;
		justify-items: center;
		align-items: center;
		width: 100%;
		max-width: 1170px;
		margin: 10rem auto;
		padding: 20px 20px 50px;
		background: #fff;
	}
	.buttonContainer {
		width: 300px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		gap: 10px;
	}
	.button {
		width: 100%;
		height: 60px;
		border: none;
		border-radius: var(--borderRadius);
		padding: 1rem;
		background: #db8621;
		color: #fff;
		p {
			margin: 0;
			line-height: 1;
			font-size: 1.5rem;
			font-weight: 500;
			text-align: center;
		}
	}
	.buttonBg {
		width: 100%;
	}
	.button1 {
		position: relative;
		z-index: 50;
	}
	.buttonBg1 {
		border-radius: calc(var(--borderRadius) + var(--backgroundPadding));
		padding: var(--backgroundPadding);
		background-size: 500% 500%;
		background-image: conic-gradient(
			#fff calc(var(--conic-rotation) - 5deg),
			#db8621 calc(var(--conic-rotation) + 85deg),
			#fff calc(var(--conic-rotation) + 175deg),
			#db8621 calc(var(--conic-rotation) + 265deg)
		);

		animation: 6s gradient linear infinite alternate;
	}

	.button2 {
		position: relative;
		z-index: 50;
		:before {
			content: '';
			display: block;
			width: 0px;
			height: calc(100% + 10px);
			position: absolute;
			top: -5px;
			left: 0;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideBackAndForth ease-in-out infinite;
			z-index: -1;
			transform-origin: 50%;
			background: radial-gradient(
				circle,
				oklch(100% 0 0 / 0%) 0,
				oklch(100% 0 0 / 0%) 69%,
				hsla(33, 74%, 49%, 1) 70%
			);
		}
	}
	.button3 {
		position: relative;
		z-index: 50;
		:before {
			content: '';
			display: block;
			width: 0px;
			height: calc(100% + 10px);
			position: absolute;
			top: -5px;
			left: 0;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideBackAndForth1 ease-in-out infinite alternate;
			z-index: -1;
			background: radial-gradient(
				circle,
				oklch(100% 0 0 / 0%) 0,
				oklch(100% 0 0 / 0%) 69%,
				hsla(33, 74%, 49%, 1) 70%
			);
		}
		:after {
			content: '';
			display: block;
			width: 0px;
			height: calc(100% + 10px);
			position: absolute;
			top: -5px;
			right: 0;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideBackAndForthReverse ease-in-out infinite reverse;
			z-index: -1;
			background: radial-gradient(
				circle,
				oklch(100% 0 0 / 0%) 0,
				oklch(100% 0 0 / 0%) 69%,
				hsla(33, 74%, 49%, 1) 70%
			);
		}
	}
	.button4 {
		position: relative;
		z-index: 50;
		:before {
			content: '';
			display: block;
			width: 310px;
			height: 0;
			position: absolute;
			top: 0;
			left: -5px;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideUpAndDown ease-in-out infinite alternate;
			z-index: -1;
			background: radial-gradient(
				circle,
				oklch(100% 0 0 / 0%) 0,
				oklch(100% 0 0 / 0%) 69%,
				hsla(33, 74%, 49%, 1) 70%
			);
		}
	}
	.button5 {
		position: relative;
		z-index: 50;
		:before {
			content: '';
			display: block;
			width: 310px;
			height: 0;
			position: absolute;
			top: 0;
			left: -5px;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideUpAndDown ease-in-out infinite alternate;
			z-index: -1;
			background: radial-gradient(
				circle,
				oklch(100% 0 0 / 0%) 0,
				oklch(100% 0 0 / 0%) 69%,
				hsla(33, 74%, 49%, 1) 70%
			);
		}
		:after {
			content: '';
			display: block;
			width: 0px;
			height: calc(100% + 10px);
			position: absolute;
			top: -5px;
			right: 0;
			background: #db8621;
			border-radius: 20px;
			padding: 6px 5px;
			animation: 3s slideBackAndForthReverse ease-in-out infinite reverse;
			z-index: -1;
			background: radial-gradient(circle, oklch(100% 0 0 / 0%) 5%, #db8621 70%);
		}
	}
	.button6 {
		position: relative;
		background: transparent;
		z-index: 50;
		overflow: hidden;
		&:before {
			content: '';
			inset: 0;
			z-index: -1;
			display: block;
			position: absolute;
			background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
			background-size: 400% 400%;
			animation: gradient 8s ease infinite;
			filter: blur(3px);
		}
	}

	.button7 {
		position: relative;
		overflow: hidden;
		border-radius: 6px;
		background: transparent;
		color: #333;

		:before {
			position: absolute;
			content: '';

			margin: 0;
			inset: -4px;

			border-image: conic-gradient(
					from var(--conic-rotation),
					oklch(77% 0.5 200) 0%,
					26%,
					oklch(77% 0.5 230) 0% 0%,
					46%,
					oklch(77% 0.5 260) 0% 0%,
					60%,
					oklch(77% 0.5 280) 0% 0%,
					82%,
					oklch(77% 0.5 300) 0% 0%
				)
				1;
			border-width: 8px;
			border-style: solid;
			animation: 3s rotateBorder linear infinite;

			filter: blur(6px);
			/* z-index: -1; */
		}
	}
</style>
