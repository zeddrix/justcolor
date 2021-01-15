import React from 'react';

export const changeToArbitraryColor = () =>
	(document.body.style.backgroundColor =
		'#' + Math.floor(Math.random() * 16777215).toString(16));

const ArbitraryBtn = () => (
	<button className='arbitrary-btn' onClick={changeToArbitraryColor}></button>
);

export default ArbitraryBtn;
