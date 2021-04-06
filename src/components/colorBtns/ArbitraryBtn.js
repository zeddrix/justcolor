import React from 'react';

const ArbitraryBtn = ({ changeToArbitraryColor }) => (
	<button
		className='arbitrary-btn color-btn'
		onMouseDown={changeToArbitraryColor}></button>
);

export default ArbitraryBtn;
