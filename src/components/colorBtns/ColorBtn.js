import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { showEditModal } from '../../actions/modalActions';
import { getColorId, setCurrent } from '../../actions/colorActions';

const ColorBtn = ({ color, getColorId, setCurrent }) => {
	const changeColor = (color) => {
		document.body.style.backgroundColor = color;
	};
	const dispatch = useDispatch(showEditModal());

	const selectBtnToEdit = () => {
		setCurrent(color);
		dispatch(showEditModal());
		getColorId(color.id);
	};

	return (
		<button
			style={{ background: color.rgb }}
			onMouseDown={() => changeColor(color.rgb)}
			onDoubleClick={selectBtnToEdit}
			id={color.id}
			className={
				color.colorName.split(' ')[0].length > 9
					? 'word-break'
					: color.rgb === 'rgb(0, 0, 0)'
					? 'black'
					: undefined
			}>
			{color.colorName}
		</button>
	);
};

export default connect(null, { getColorId, setCurrent })(ColorBtn);
