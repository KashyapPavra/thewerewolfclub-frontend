import React from "react";
import discordLogo from "../../images/logos/discord.svg";
import Slider from "../Slider";
export default function IntroSection() {
	return (
		<div className='introSection container'>
			<div className='introTextArea'>
				<p className='introText'>
					A pack of <span className='pinkText'>WereWolves</span> have gone loose
					in our world, beware they are much more{" "}
					<span className='pinkText'>human</span> than us!
				</p>
				<a class='discordLink' href='https://discord.gg/9JCKF6At'>
					<button className='discordBtn'>
						<img src={discordLogo} alt='discordLogo' className='discordLogo' />
						Join Discord
					</button>
				</a>
			</div>
			<Slider />
		</div>
	);
}
