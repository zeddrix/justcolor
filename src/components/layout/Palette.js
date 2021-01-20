import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ArbitraryBtn from '../colorBtns/ArbitraryBtn';
import ColorBtn from '../colorBtns/ColorBtn';
import AppendBtn from '../colorBtns/AppendBtn';
import { getColors } from '../../actions/colorActions';

const Palette = ({ color: { colors }, getColors }) => {
	const [isClicked, setIsClicked] = useState(true);

	const changeToArbitraryColor = () => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
		setIsClicked(!isClicked);
	};

	useEffect(() => {
		getColors();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='palette'>
			<ArbitraryBtn changeToArbitraryColor={changeToArbitraryColor} />
			<AppendBtn isClicked={isClicked} />
			{colors.map((color, key) => (
				<ColorBtn color={color} key={key} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	color: state.colorsState,
});

export default connect(mapStateToProps, { getColors })(Palette);
