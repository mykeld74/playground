<script>
	import { onMount } from 'svelte';

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

	.skill {
		font-size: 1.5rem;
		width: max-content;
		white-space: nowrap;
		background: oklch(27.03% 0.047 234.02);
		padding: 0.5rem 1.25rem;
		border-radius: 10px;
		box-shadow: 3px 3px 6px oklch(20% 0 0);
	}
</style>
