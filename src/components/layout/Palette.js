import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ArbitraryBtn from '../ColorButtons/ArbitraryBtn';
import ColorBtn from '../ColorButtons/ColorBtn';
import AppendBtn from '../ColorButtons/AppendBtn';

import './Palette.css';
import './../Scrollbar.css';

const Palette = () => {
	const [isClicked, setIsClicked] = useState(true);
	const colors = useSelector((state) => state.colorsState.colors);

	const setCurrentBG = () => {
		setIsClicked(!isClicked);
	};

	useEffect(() => {
		setCurrentBG();
		// eslint-disable-next-line
	}, []);

	const changeToArbitraryColor = () => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
		setIsClicked(!isClicked);
	};

	const changeColor = (color) => {
		document.body.style.backgroundColor = color;
		setIsClicked(!isClicked);
	};

	return (
		<div className='palette'>
			<ArbitraryBtn changeToArbitraryColor={changeToArbitraryColor} />
			<AppendBtn isClicked={isClicked} />
			{colors.map((color) => (
				<ColorBtn changeColor={changeColor} color={color} key={color.id} />
			))}
		</div>
	);
};

export default Palette;
