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
</svelte:head>

<div class="promoContainer">
	<div class="zoneWrapper" id="ZoneId" data-zoneid="ZoneId">
		{#each ads as ad}
			<div class="template" id="TemplateId" data-templateid="TemplateId">
				<div class="AdId" data-adid="AdId">
					<div class="promoContent">
						<div class="promoLogo">
							<img src={ad.LogoUrl} alt="Headline" />
						</div>

						<div class="promoHeadline">{ad.Headline}</div>
						<div class="promoBullets">
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
         <div class='promoContent'>
            <a href="{{clickUrl}}" target="_blank" class=""></a>
            <div class="promoLogo">
               <img src="{{LogoUrl}}" alt="{{Headline}}" />
            </div>
            <div class="adText">
               <div class="promoHeadline">
                  {{Headline}}
               </div>
               <div class="promoBullets">
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
	.promoContainer {
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
	.template {
		width: 100%;
		max-width: 850px;
		box-shadow: 2px 2px 6px #888;
		border-radius: 5px;
		padding: 20px;
	}
	.promoContent {
		display: grid;
		grid-template-columns: 180px 1fr 200px;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'title title title' 'logo content cta';
		gap: 20px;
		@media (max-width: 700px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto 1fr;
			grid-template-areas: 'title' 'logo' 'content' 'cta';
		}
	}
	.promoLogo,
	.ctaContent {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: center;
		align-items: center;
	}
	.promoHeadline {
		grid-area: content;
		font-size: 1.5em;
		font-weight: 500;
		grid-area: title;
		text-align: center;
	}
	.promoBullets {
		grid-area: content;
		font-size: 1.1em;
		line-height: 1.1;
		grid-area: content;
		ul {
			padding-left: 20px;
		}
		li {
			margin-bottom: 10px;
		}
	}
	.promoLogo {
		max-width: 180px;
	}
	.promoLogo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
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
