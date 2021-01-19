import React, { Fragment, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { showEditModal } from '../../actions/modalActions';
import { getColors } from '../../actions/colorActions';

const changeColor = (color) => {
	document.body.style.backgroundColor = color;
};

const ColorBtns = ({ color: { colors }, getColors }) => {
	useEffect(() => {
		getColors();
		// eslint-disable-next-line
	}, []);

	const dispatch = useDispatch(showEditModal());

	return (
		<Fragment>
			{colors.map((color, i) => (
				<button
					style={{ background: color.rgb }}
					onMouseDown={() => changeColor(color.rgb)}
					onDoubleClick={() => dispatch(showEditModal())}
					className={
						color.colorName.split(' ')[0].length > 9
							? 'word-break'
							: color.rgb === 'rgb(0, 0, 0)'
							? 'black'
							: undefined
					}
					key={i}>
					{color.colorName}
				</button>
			))}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	color: state.colorsState,
});

export default connect(mapStateToProps, { getColors })(ColorBtns);
