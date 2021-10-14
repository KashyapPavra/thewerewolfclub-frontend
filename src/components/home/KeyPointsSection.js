import React from "react";
import KeyCard from "./KeyCard";
export default function KeyPointsSection() {
	return (
		<div className='keyPointsSection container'>
			<div className='heading'>
				Why HOWL
				<br />
				with the wolves?
			</div>
			<div className='keyCardArea'>
				<KeyCard
					extraClass='hat'
					heading='Royalty System'
					info='Yes you heard the right, our awesome creators are not money crazed assholes. They only want a small piece of the pie. We only take 5% of the 20% royalties for every sale on the secondary marketplace.'
				/>
				<KeyCard
					heading='Weekly Minting'
					info='We give our initial howlers a HUGE incentive. For all the 7777 people who minted the wolves, we give them the hard and shiny SOL every 7 days, right in their wallets.'
				/>
				<KeyCard
					heading='Daily Staking'
					info='We are bringing staking to our howlers as well. We limit the number of staked werewolves at a given time to 1000. Each of the howlers who stake their wolves with us get daily rewards from our community treasury. The community treasury keeps getting heavier and heavier due to the 5% royalty on each secondary sale.'
				/>
				<KeyCard
					heading='Deflationary Floor Bonfires'
					info='We sweep the bloody floors regularly using this treasury as well. But we don’t do this ourselves. You decide when this happens and how this happens. Or you want to just keep holding the Sol bags in this treasury. Be our guest. This is YOUR bag.'
				/>
				<KeyCard
					heading='Mutant Roadmap'
					info='Our Mutant roadmap allows us to reduce the supply of werewolves even further and thus increase the demand and therefore the price for every werewolf. Due to the augment of the mutants and monster Werewolves, the rarity is also re-supplied in the collection to make the current werewolves left in supply even more in demand.
'
				/>
			</div>
		</div>
	);
}
