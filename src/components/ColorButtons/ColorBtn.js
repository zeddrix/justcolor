import { connect, useDispatch } from 'react-redux';
import { showEditModal } from '../../actions/modalActions';
import { getColorId, setCurrent } from '../../actions/colorActions';
import { useDoubleClick } from '../../actions/useDoubleClick';

import './ColorButtons.css';

const ColorBtn = ({ color, getColorId, setCurrent, changeColor }) => {
	const dispatch = useDispatch(showEditModal());

	const editMode = () => {
		setCurrent(color);
		dispatch(showEditModal());
		getColorId(color.id);
	};

	const [refCallback] = useDoubleClick(editMode);

	return (
		<button
			style={{ background: color.rgb }}
			onMouseDown={() => changeColor(color.rgb)}
			ref={refCallback}
			id={color.id}
			className={
				color.rgb === 'rgb(0, 0, 0)'
					? 'color-btn black word-break'
					: 'color-btn word-break'
			}>
			{color.colorName}
		</button>
	);
};

export default connect(null, { getColorId, setCurrent })(ColorBtn);
