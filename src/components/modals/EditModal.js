import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { hideEditModal } from '../../actions/modalActions';
import { deleteColor, updateColor } from '../../actions/colorActions';
import { showDeleteToast, showUpdateToast } from './toasts';

const EditModal = ({ current, deleteColor, updateColor }) => {
	const dispatch = useDispatch();
	const colorIdState = useSelector((state) => state.colorIdState);
	const { colorId } = colorIdState;
	const [colorName, setColorName] = useState('');

	useEffect(() => {
		if (current) {
			setColorName(current.colorName);
		}
	}, [current]);

	const onSubmit = () => {
		const updColor = {
			colorName,
			rgb: document.body.style.backgroundColor,
			id: colorId,
		};
		updateColor(updColor);
		setColorName('');
		dispatch(hideEditModal());
		showUpdateToast();
	};

	const onDelete = () => {
		deleteColor(colorId);
		dispatch(hideEditModal());
		showDeleteToast();
	};

	return (
		<div
			id='backdrop'
			onMouseDown={(e) => {
				e.target === document.querySelector('#backdrop') &&
					dispatch(hideEditModal());
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
					onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
					maxLength='16'
					placeholder='Enter name...'
					autoFocus
				/>
				<br />
				<div id='delete-btn' className='modal-btn' onClick={onDelete}>
					Delete
				</div>
				<div id='done-btn' className='modal-btn' onClick={onSubmit}>
					Done
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	current: state.colorsState.current,
});

export default connect(mapStateToProps, { deleteColor, updateColor })(
	EditModal
);
