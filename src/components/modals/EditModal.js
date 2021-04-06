import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { hideEditModal } from '../../actions/modalActions';
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

		toast.info('Color button updated', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

		closeModal();
	};

	const onDelete = () => {
		deleteColor(colorId);

		toast.error('Color button deleted', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

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
})(EditModal);
