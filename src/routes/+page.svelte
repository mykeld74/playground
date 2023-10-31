<script>
	import { onMount } from 'svelte';
	import * as Pic from '$img';

	/**
	 * @type {any[] | NodeListOf<Element>}
	 */
	let scrollers = [];
	/**
	 * @type {Element | never[] | null}
	 */

	let isLoaded = false;

	function addAnimation() {
		scrollers.forEach((scroller) => {
			scroller.setAttribute('data-animated', true);
			const scrollerInner = document.querySelector('.innerScroller');
			const scrollerInnerContent = Array.from(scrollerInner?.children);

			scrollerInnerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner?.appendChild(duplicatedItem);
			});
		});
	}
	onMount(() => {
		isLoaded = true;
		scrollers = document.querySelectorAll('.scrollerContainer');
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation();
		}
	});
</script>

<div class="main">
	<div class="hero">
		<div class="heroText">
			<h1 class="headline">Welcome to the Big Bearded Dev Playground</h1>
			<h3 class="subhead">Just a place for me to try some stuff</h3>
		</div>
	</div>
	<section class="coverFlow">
		<ul class="cards">
			<li><img src={Pic.Num1} alt="1" /></li>
			<li><img src={Pic.Num2} alt="2" /></li>
			<li><img src={Pic.Num3} alt="3" /></li>
			<li><img src={Pic.Num4} alt="4" /></li>
			<li><img src={Pic.Num5} alt="5" /></li>
			<li><img src={Pic.Num6} alt="6" /></li>
			<li><img src={Pic.Num7} alt="7" /></li>
			<li><img src={Pic.Num8} alt="8" /></li>
			<li><img src={Pic.Num9} alt="9" /></li>
			<li><img src={Pic.Num10} alt="10" /></li>
			<li><img src={Pic.Num11} alt="11" /></li>
			<li><img src={Pic.Num12} alt="12" /></li>
			<li><img src={Pic.Num13} alt="13" /></li>
			<li><img src={Pic.Num14} alt="14" /></li>
			<li><img src={Pic.Num15} alt="15" /></li>
			<li><img src={Pic.Num16} alt="16" /></li>
			<li><img src={Pic.Num17} alt="17" /></li>
			<li><img src={Pic.Num18} alt="18" /></li>
			<li><img src={Pic.Num19} alt="19" /></li>
			<li><img src={Pic.Num20} alt="20" /></li>
			<li><img src={Pic.Num21} alt="21" /></li>
			<li><img src={Pic.Num22} alt="22" /></li>
			<li><img src={Pic.Num23} alt="23" /></li>
			<li><img src={Pic.Num24} alt="24" /></li>
		</ul>
	</section>

	<div class={isLoaded ? 'mainContainer' : 'mainContainer hidden'}>
		<div class="scrollerContainer" data-animationSpeed="slow">
			<ul class="skills innerScroller">
				<li class="skill">HTML</li>
				<li class="skill">CSS</li>
				<li class="skill">JavaScript</li>
				<li class="skill">Svelte</li>
				<li class="skill">React</li>
				<li class="skill">Animation</li>
				<li class="skill">Front End</li>
				<li class="skill">SVG</li>
				<li class="skill">UI/UX</li>
				<li class="skill">Full Stack</li>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.mainContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		gap: 30px;
	}

	.hidden {
		display: none;
	}

	.scrollerContainer {
		width: var(--scrollerWidth);
		border: 2px solid #0f0;
	}

	.innerScroller {
		width: fit-content;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		padding-block: 20px;
		padding-inline: 0;
		margin: 0;
		gap: var(--innerScrollGap);
	}

	:global(.scrollerContainer[data-animated]) {
		overflow: hidden;
		mask: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
		.innerScroller {
			flex-wrap: nowrap;
			animation: scroll var(--animationDuration, 30s) var(--animationDirect, forwards) linear
				infinite;
		}
	}

	:global([data-animationSpeed='fast']) {
		--animationDuration: 10s;
	}
	:global([data-animationSpeed='slow']) {
		--animationDuration: 60s;
	}

	@keyframes sticky-parallax-header-move-and-size {
		from {
			background-position: 50% 0;
			height: 100vh;
			font-size: calc(4vw + 1em);
		}
		to {
			background-position: 50% 100%;
			background-color: #024069;
			height: 10vh;
			font-size: 2em;
		}
	}

	@keyframes adjust-z-index {
		0% {
			z-index: 1;
		}
		50% {
			z-index: 100;
		}
		100% {
			z-index: 1;
		}
	}
	@keyframes rotate-cover {
		0% {
			transform: translateX(-100%) rotateY(-45deg);
		}
		35% {
			transform: translateX(0) rotateY(-45deg);
		}
		50% {
			transform: rotateY(0deg) translateZ(1em) scale(2);
		}
		65% {
			transform: translateX(0) rotateY(45deg);
		}
		100% {
			transform: translateX(100%) rotateY(45deg);
		}
	}

	.skill {
		font-size: 1.5rem;
		width: max-content;
		white-space: nowrap;
		background: oklch(27.03% 0.047 234.02);
		padding: 0.5rem 1.25rem;
		border-radius: 10px;
		box-shadow: 3px 3px 6px oklch(20% 0 0);
	}

	@supports (animation-range: 0vh 90vh) {
		.main {
			padding-top: 100vh;
		}
		.hero {
			position: fixed;
			top: 0;
			animation: sticky-parallax-header-move-and-size linear forwards;
			animation-timeline: scroll();
			animation-range: 0vh 90vh;
		}
	}
	.hero {
		color: #fff;
		height: 100vh;
		width: 100%;
		background: url('https://res.cloudinary.com/bigbeardeddev/image/upload/f_auto,q_auto/v1697202081/bigbeardeddev/background')
			center center / cover no-repeat;
		background-blend-mode: soft-light;
		display: grid;
		place-items: center;
		text-align: center;
		/* font-size: calc(3vw + 0.75em); */
	}
	.headline {
		font-size: 0.95em;
		text-shadow: 2px 2px 6px #000;
		margin: 0 0 0.5em 0;
		line-height: 1;
	}
	.subhead {
		font-size: 0.75em;
		text-shadow: 2px 2px 6px #000;
		margin: 0;
		line-height: 1;
	}
	.heroText {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: calc(100% - 40px);
	}

	.textWithBg {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 500px;
	}
	.hasBgImg {
		font-size: 100px;
		background: url(../images/textBg.JPG) center 100% / cover no-repeat;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-transform: uppercase;
	}

	.cards {
		--cover-size: 200px;
		list-style: none;
		white-space: nowrap;
		max-width: calc(var(--cover-size) * 6);
		overflow-x: scroll;
		margin: 300px auto 200px;
		padding: 150px;
		position: relative;
		scroll-snap-type: x mandatory;
		background: rgba(0 0 0 / 0.5);
		li {
			display: inline-block;
			width: var(--cover-size);
			aspect-ratio: 1;
			view-timeline-name: --li-in-and-out-of-view;
			view-timeline-axis: inline;
			animation: linear adjust-z-index both;
			animation-timeline: --li-in-and-out-of-view;
			perspective: 40em;
			position: relative;
			z-index: 1;

			padding-bottom: calc(var(--cover-size) / 1.5);
			will-change: z-index;
			user-select: none;
			scroll-snap-align: center;
			&:first-of-type {
				margin-left: calc(50% - (var(--cover-size) / 2));
			}
			> img {
				width: var(--cover-size);
				height: var(--cover-size);
				-webkit-box-reflect: below 0.3em linear-gradient(rgb(0 0 0 / 0), rgb(0 0 0 / 0.15));
				animation: linear rotate-cover both;
				animation-timeline: --li-in-and-out-of-view;
				transform: translateX(-100%) rotateY(-45deg);
				will-change: transform;
				border-radius: 10px;
			}
		}
	}
</style>
