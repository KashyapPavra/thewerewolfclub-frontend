import React from "react";

export default function KeyCard(props) {
	return (
		<div
			className={props.extraClass ? "keyCard " + props.extraClass : "keyCard"}
		>
			<div className='cardHeading'>{props.heading}</div>
			<div className='cardInfo'>{props.info}</div>
		</div>
	);
}
