import React from "react";

export default function RoadmapCard(props) {
	return (
		<div
			className={props.extraClass ? "keyCard " + props.extraClass : "keyCard"}
		>
			<div className='cardHeading'>{props.heading}</div>
			<ul className='cardInfo'>
				{props.info.map((ele, index) => {
					return <li>{ele}</li>;
				})}
			</ul>
		</div>
	);
}
