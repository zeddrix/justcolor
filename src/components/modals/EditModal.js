import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
	hideEditModal,
	showToast,
	hideToast,
} from '../../actions/modalActions';
import {
	clearCurrent,
	deleteColor,
	updateColor,
} from '../../actions/colorActions';

const EditModal = ({
	current,
	deleteColor,
	updateColor,
	clearCurrent,
	colorId,
	showToast,
	hideToast,
}) => {
	const dispatch = useDispatch();
	const [colorName, setColorName] = useState('');

	useEffect(() => {
		if (current) {
			setColorName(current.colorName);
		}
	}, [current]);

	const closeModal = () => {
		dispatch(hideEditModal());
		clearCurrent();
	};

	const onUpdate = () => {
		const updColor = {
			colorName,
			rgb: document.body.style.backgroundColor,
			id: colorId,
		};
		updateColor(updColor);
		setColorName('');
		dispatch(showToast('Color button updated', 'update-toast'));
		setTimeout(() => {
			dispatch(hideToast());
		}, 1500);
		closeModal();
	};

	const onDelete = () => {
		deleteColor(colorId);
		dispatch(showToast('Color button deleted', 'delete-toast'));
		setTimeout(() => {
			dispatch(hideToast());
		}, 1500);
		closeModal();
	};

	return (
		<div
			id='backdrop'
			onMouseDown={(e) => {
				e.target === document.querySelector('#backdrop') && closeModal();
			}}>
			<div className='edit-color-modal modal'>
				<p className='modal__description'>Edit color button:</p>
				<input
					id='edit-color-input'
					className='input-field'
					type='text'
					name='colorName'
					value={colorName}
					onChange={(e) => setColorName(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && onUpdate()}
					maxLength='16'
					placeholder='Enter name...'
					autoFocus
				/>
				<br />
				<div id='delete-btn' className='modal-btn' onClick={onDelete}>
					Delete
				</div>
				<div id='done-btn' className='modal-btn' onClick={onUpdate}>
					Done
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	colorId: state.colorIdState.colorId,
	current: state.colorsState.current,
});

export default connect(mapStateToProps, {
	deleteColor,
	updateColor,
	clearCurrent,
	showToast,
	hideToast,
})(EditModal);
