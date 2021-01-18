import React from 'react';

const ArbitraryBtn = ({ changeToArbitraryColor }) => (
	<button
		className='arbitrary-btn'
		onMouseDown={changeToArbitraryColor}></button>
);

export default ArbitraryBtn;
