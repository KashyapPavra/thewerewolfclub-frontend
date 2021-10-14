import React from "react";
import LogoSection from "../components/home/LogoSection";
import IntroSection from "../components/home/IntroSection";
import KeyPointsSection from "../components/home/KeyPointsSection";
import RoadmapSection from "../components/home/RoadmapSection";
export default function Home() {
	return (
		<div id='homePage'>
			<LogoSection />
			<IntroSection />
			<KeyPointsSection />
			<RoadmapSection />
		</div>
	);
}
