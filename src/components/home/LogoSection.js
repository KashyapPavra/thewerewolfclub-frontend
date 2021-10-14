import React from "react";
import logo from "../../images/logos/logo.png";
export default function LogoSection() {
	return (
		<div className='logoSection'>
			<div className='imgSection'>
				<img src={logo} alt='logo' />
			</div>
			<div className='nameSection'>
				The
				<br />
				Werewolf Club
			</div>
		</div>
	);
}
