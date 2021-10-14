import React from "react";
import RoadmapCard from "./RoadmapCard";
export default function RoadmapSection() {
	return (
		<div className='roadmapSection container'>
			<div className='heading'>
				Plan to infiltrate
				<br />
				Humanity
			</div>
			<div className='roadmapArea'>
				<RoadmapCard
					heading='Phase 1'
					info={["Launched our project", "Community airdrops", "Presale"]}
					extraClass='roadmap1'
				/>
				<RoadmapCard
					heading='Phase 2'
					info={[
						"Halloween Werewolves Flashsale and Airdrops",
						"Public Mint using FAIR LAUNCH PROTOCOL",
						"Secondary Market launched",
					]}
					extraClass='roadmap2 hand'
				/>
				<RoadmapCard
					heading='Phase 3'
					info={[
						"Rarity Tool released",
						"Minting rewards got retroactive",
						"Staking got retroactive",
						"HowlersDAO launched",
					]}
					extraClass='roadmap3 ghost'
				/>
				<RoadmapCard
					heading='Phase 4'
					info={[
						"Peer trading interface",
						"Fractional ownership of Wolves",
						"Community Hackathons",
					]}
					extraClass='roadmap4 magic_hat'
				/>
				<RoadmapCard
					heading='Phase 5'
					info={[
						"Deflationary Mutant Transformation",
						"Open sourced proprietary code",
					]}
					extraClass='roadmap5'
				/>
			</div>
		</div>
	);
}
