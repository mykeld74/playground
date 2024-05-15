<script>
	import { RBA, SMHF } from '$img';
	const ads = [
		{
			AdId: 'ad-1',
			clickUrl: 'https://example.com',
			LogoUrl: SMHF,
			Headline: 'Capicola shankle sausage chislic pork spare ribs burgdoggen',
			CTAtext: 'View My Quote',
			Bullets: [
				'Bacon ipsum dolor amet chicken jerky landjaeger',
				'Filet mignon jowl sausage andouille cupim capicola',
				'Biltong kielbasa andouille, corned beef cupim'
			]
		},
		{
			AdId: 'ad-2',
			clickUrl: 'https://example.com',
			LogoUrl: RBA,
			Headline: 'Eu incididunt bresaola chicken jerky magna',
			CTAtext: 'View My Quote',
			Bullets: [
				'Pig dolor veniam duis meatloaf. Fugiat bacon',
				'Commodo quis jerky short ribs velit ham hock',
				'Tail frankfurter chislic'
			]
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
	<title>SuCo Ads</title>
</svelte:head>

<div class="gpContainer">
	<div class="zoneWrapper" id="ZoneId" data-zoneid="ZoneId">
		{#each ads as ad}
			<div class="gpTemplate" id="TemplateId" data-templateid="TemplateId">
				<div class="GpId" data-gpid="AdId">
					<div class="gpContent">
						<div class="gpLogo">
							<img src={ad.LogoUrl} alt="Headline" />
						</div>

						<div class="gpHeadline">{ad.Headline}</div>
						<input type="checkbox" id={`gpCheckbox${ad.AdId}`} class="gpCheckbox" />
						<label for={`gpCheckbox${ad.AdId}`} class="gpCheckboxLabel">
							<svg viewBox="0 0 668 315" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M30.9375 30.1279L334.276 284.659"
									stroke="white"
									stroke-width="60"
									stroke-linecap="round"
								/>
								<path
									d="M334 284.531L637.338 30.0001"
									stroke="white"
									stroke-width="60"
									stroke-linecap="round"
								/>
							</svg>
						</label>
						<div class="gpBullets">
							<ul>
								{#each ad.Bullets as bullet}
									<li>{bullet}</li>
								{/each}
							</ul>
						</div>

						<div class="ctaContent">
							<div class="ctaButton">
								<a>{ad.CTAtext}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- <div class="zoneWrapper" id="ZoneId" data-zoneid="{{ZoneId}}">
   <div class="ad" id="TemplateId" data-templateid="{{TemplateId}}">
      {{#Ads}}
      <div class="AdId" data-adid="{{AdId}}">
         <div class='gpContent'>
            <a href="{{clickUrl}}" target="_blank" class=""></a>
            <div class="gpLogo">
               <img src="{{LogoUrl}}" alt="{{Headline}}" />
            </div>
            <div class="adText">
               <div class="gpHeadline">
                  {{Headline}}
               </div>
               <div class="gpBullets">
                  <ul>
                     {{#Bullets}}
                     <li>{{.}}</li>
                     {{/Bullets}}
                  </ul>
               </div>
            </div>
            <div class="ctaContent">
               <div class="ctaButton">
                  <a>{{CTAtext}}</a>
               </div>
            </div>
         </div>
      </div>
      {{/Ads}}
   </div>
</div> -->

<style>
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}
	.gpContainer {
		width: 100%;
		max-width: 1000px;
		margin: 150px auto 0;
		background: #fff;
		min-height: 80vh;
		color: #000;
		padding: 20px;
		font-family: 'Roboto', sans-serif;
		font-size: var(--baseFontSize, 16px);
	}
	.zoneWrapper {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
	.gpTemplate {
		width: 100%;
		max-width: 850px;
		box-shadow: 2px 2px 6px #888;
		border-radius: 5px;
		padding: 20px;
	}
	.gpContent {
		display: grid;
		grid-template-columns: 180px 1fr 200px;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'title title title' 'logo content cta';
		gap: 20px;
		@media (max-width: 700px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto 1fr;
			grid-template-areas: 'logo' 'title' 'arrow' 'content' 'cta';
			gap: 10px;
		}
	}
	.gpLogo,
	.ctaContent {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: center;
		align-items: center;
	}
	.gpHeadline {
		grid-area: content;
		font-size: 1.5em;
		font-weight: 500;
		grid-area: title;
		text-align: center;
	}
	.gpBullets {
		grid-area: content;
		font-size: 1.1em;
		line-height: 1.1;
		grid-area: content;
		@media (max-width: 700px) {
			height: auto;
			max-height: 0px;
			overflow: clip;
			transition: max-height 300ms ease;
			li {
				margin-bottom: 0;
			}
			ul {
				margin: 0;
			}
		}
		ul {
			padding-left: 20px;
		}
		li {
			margin-bottom: 10px;
		}
	}
	.gpCheckbox {
		display: none;
	}
	input:checked + label {
		transition: transform 300ms ease;
		transform: rotate(180deg);
	}
	input:checked + label + .gpBullets {
		@media (min-height: 700px) {
			/* height: auto; */
			max-height: 600px;
			transition: max-height 300ms ease;
		}
	}
	.gpLogo {
		max-width: 180px;
	}
	.gpLogo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.gpCheckboxLabel {
		display: none;
		@media (max-width: 700px) {
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			background: #c4c4c4;
			border-radius: 250px;
			grid-area: arrow;
			margin: 0 auto;
			transition: transform 300ms ease;
		}
	}
	.gpCheckboxLabel svg {
		width: 60%;
	}
	.ctaContent {
		grid-area: cta;
	}
	.ctaButton {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #0ab3ea;
		color: #fff;
		border-radius: 5px;
		height: 3.6em;
		font-size: 1.2em;
		font-weight: 600;
		cursor: pointer;
		text-align: center;
		/* animation: pulse 2s infinite; */
	}
</style>
