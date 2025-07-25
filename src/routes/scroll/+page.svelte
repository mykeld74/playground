<script>
	import * as Pic from '$img';
	let cards = [
		{ title: 'Card One', img: Pic.Num1 },
		{ title: 'Card Two', img: Pic.Num2 },
		{ title: 'Card Three', img: Pic.Num3 },
		{ title: 'Card Four', img: Pic.Num4 }
	];
</script>

<div class="pageWrapper">
	<div class="hero">
		<h1>Scroll</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Quisquam, quos.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Quisquam, quos.
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga
			similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit
			excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto
			voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos
			nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore?
			Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam
			necessitatibus quod natus, dolor laboriosam illo velit.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum
			provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi
			reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore
			in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias
			nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem
			placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem
			officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium
			reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias
			explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque,
			rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum
			neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam
			molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim
			sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati
			incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum
			ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error
			voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus
			inventore.
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga
			similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit
			excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto
			voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos
			nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore?
			Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam
			necessitatibus quod natus, dolor laboriosam illo velit.
		</p>
	</div>
	<ul id="cards" style="--numcards: {cards.length};">
		{#each cards as card, i}
			<li class="card" style="--index: {i + 1};">
				<div class="card__content">
					<div>
						<h2>{card.title}</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<p><a href="#top" class="btn btn--accent">Read more</a></p>
					</div>
					<figure>
						<img src={card.img} alt="Image description" />
					</figure>
				</div>
			</li>
		{/each}
	</ul>
	<aside>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum
			provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi
			reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore
			in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias
			nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem
			placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem
			officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium
			reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias
			explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque,
			rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum
			neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam
			molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim
			sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati
			incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum
			ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error
			voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus
			inventore.
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga
			similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit
			excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto
			voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos
			nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore?
			Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam
			necessitatibus quod natus, dolor laboriosam illo velit.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum
			provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi
			reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore
			in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias
			nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem
			placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem
			officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium
			reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias
			explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque,
			rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum
			neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam
			molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim
			sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati
			incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum
			ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error
			voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus
			inventore.
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam molestias. Fuga
			similique, dolor tempora rerum perferendis ipsam ullam doloribus beatae esse facilis quae sit
			excepturi expedita non, sunt accusantium magnam? Animi nesciunt nostrum eligendi iusto
			voluptatum hic qui. Quod distinctio qui nobis et doloremque. Fuga, itaque? Laborum dignissimos
			nobis quaerat optio voluptatum similique unde, neque cupiditate, vel, fugiat dolore?
			Accusantium neque deserunt ducimus enim, illum laborum magni ipsam eos optio aspernatur nam
			necessitatibus quod natus, dolor laboriosam illo velit.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non ratione eum
			provident quaerat obcaecati dicta autem voluptates sit cum quis distinctio, atque sint commodi
			reprehenderit perspiciatis iure velit molestiae eos molestias ipsa nihil quia? Porro tempore
			in fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta repellat alias
			nostrum impedit quidem odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem
			placeat, ipsa amet tempora vitae ullam animi! Hic asperiores in esse atque expedita dolorem
			officia illo commodi fugit earum ab, assumenda optio, sed repellat. Maiores laudantium
			reprehenderit suscipit accusamus assumenda, debitis nemo ut sapiente numquam doloremque alias
			explicabo minus autem harum illum dicta. Unde obcaecati inventore repellat id eligendi eaque,
			rerum aliquam maiores aspernatur cumque tenetur quo qui mollitia atque quasi voluptate ipsum
			neque explicabo voluptatem quibusdam beatae quae iste vero doloribus! Natus libero quibusdam
			molestias harum atque, assumenda doloribus quis, quam corporis, voluptas suscipit magni! Enim
			sapiente totam consequatur repellat maxime placeat perferendis iste maiores soluta, obcaecati
			incidunt expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque labore nulla laborum
			ex, explicabo magni mollitia eaque aliquam vero blanditiis quae, id necessitatibus error
			voluptas harum tempora sint porro. Facilis beatae quasi soluta et ipsum suscipit repellendus
			inventore.
		</p>
	</aside>
</div>

<style lang="postcss">
	#cards {
		--numcards: 4;
		view-timeline-name: --cards-element-scrolls-in-body;
		list-style: none;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(var(--numcards), 1fr);
		gap: 3rem;
		margin-bottom: 3rem;
		padding: 0;
	}
	.card {
		--index0: calc(var(--index) - 1);
		--reverse-index: calc(var(--numcards) - var(--index0));
		--reverse-index0: calc(var(--reverse-index) - 1);
		position: sticky;
		top: calc(2vh + (var(--index) * 3rem));
	}
	.card__content {
		--start-range: calc(var(--index0) / var(--numcards) * 100%);
		--end-range: calc((var(--index)) / var(--numcards) * 100%);
		animation: linear scale forwards;
		animation-timeline: --cards-element-scrolls-in-body;
		animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
		box-shadow:
			0 0.2em 1em rgba(0, 0, 0, 0.1),
			0 1em 2em rgba(0, 0, 0, 0.1);
		background: rgb(255, 255, 255);
		color: rgb(10, 5, 7);
		border-radius: 1em;
		overflow: hidden;
		display: grid;
		grid-template-areas: 'text img';
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		align-items: stretch;
		transform-origin: 50% 0%;
		will-change: transform;
		border: 3px solid #333;
		> div {
			grid-area: text;
			width: 80%;
			place-self: center;
			text-align: left;
			display: grid;
			gap: 1em;
			place-items: start;
		}
		> figure {
			grid-area: img;
			overflow: hidden;
		}
	}
	@keyframes scale {
		to {
			transform: scale(calc(1.1 - calc(0.05 * var(--reverse-index))));
		}
	}
	.pageWrapper {
		width: calc(100vw - 3rem);
		max-width: 1200px;
		margin: 0 auto;
	}
	.hero {
		height: 100vh;
		display: grid;
		grid-template-rows: repeat(auto-fill, auto);
	}
	p {
		font-size: 1.5rem;
	}
</style>
