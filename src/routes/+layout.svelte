<script>
	import { fly, fade } from 'svelte/transition';
	import '$css/reset.css';
	import '$css/styles.css';
	$: showNav = false;

	function toggleNav() {
		showNav = !showNav;
	}

	const navLinks = [
		{ href: '/', title: 'Home' },
		{ href: '/transitions', title: 'Transitions' },
		{ href: '/buttons', title: 'Buttons' },
		{ href: '/cards', title: 'Cards' }
	];
</script>

<svelte:head>
	<title>Welcome to my playground</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="layout">
	<button class="navToggle" on:click={toggleNav}>Menu</button>
	{#if showNav}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="navContainer"
			on:click={toggleNav}
			transition:fly={{ duration: 200, x: -300, y: -200 }}
		>
			<nav>
				<ul in:fade={{ delay: 200 }}>
					{#each navLinks as link, i}
						{#key link.href}
							<li in:fade|global={{ delay: 150 * i }}>
								<a href={link.href}>{link.title}</a>
							</li>
						{/key}
					{/each}
				</ul>
			</nav>
		</div>
	{/if}
	<slot />
</div>

<style>
	.navContainer {
		position: fixed;
		top: 0;
		height: 100vh;
		width: 100%;
		background: oklch(40% 0 0);
		z-index: 4250;
	}
	nav {
		display: flex;
		width: 400px;
		justify-content: center;
		padding: 1em;
		z-index: 4500;
	}
	.navToggle {
		position: fixed;
		top: 2rem;
		left: 2rem;
		z-index: 5000;
		aspect-ratio: 1;
		background: oklch(30% 0 0);
		padding: 0.5em 1em;
		color: #fff;
		border: none;
		border-radius: 1000px;
		font-size: 1.5em;
		cursor: pointer;
		transition: background 300 ease;
	}
	ul {
		list-style: none;
		margin: 12em 3em;
		padding: 0;
	}

	li {
		margin-bottom: 1em;
		background: oklch(0% 0 0 / 50%);
		font-size: 2em;
		padding: 0.5em;
		border-radius: 10px;
		transition: background 0.5s ease;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			color: #fff;
			text-decoration: none;
		}
	}
</style>
