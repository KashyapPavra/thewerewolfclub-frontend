import React from "react";
import downBtn from "../images/downBtn.svg";
import upBtn from "../images/upBtn.svg";
export default function Slider() {
	return (
		<div className='nftSliderArea sliderArea'>
			<div className='sliderImg'></div>
			{/* <div className='sliderControls'>
				<img src={downBtn} alt='' className='downBtn ctrlBtn' />
				<div className='slideNum'>
					<span className='slideCurrent'>1</span>/
					<span className='slideTotal'>7777</span>
				</div>
				<img src={upBtn} alt='' className='upBtn ctrlBtn' />
			</div> */}
		</div>
	);
}
