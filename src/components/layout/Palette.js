import React, { useState } from 'react';
import ArbitraryBtn from '../colorBtns/ArbitraryBtn';
import ColorBtns from '../colorBtns/ColorBtns';
import AppendBtn from '../colorBtns/AppendBtn';

const Palette = () => {
	const [isClicked, setIsClicked] = useState(true);
	const changeToArbitraryColor = () => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
		setIsClicked(!isClicked);
	};
	return (
		<div className='palette'>
			<ArbitraryBtn changeToArbitraryColor={changeToArbitraryColor} />
			<AppendBtn isClicked={isClicked} />
			<ColorBtns />
		</div>
	);
};

export default Palette;
