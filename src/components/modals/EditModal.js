import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { hideEditModal } from '../../actions/modalActions';
import { deleteColor } from '../../actions/colorActions';

const EditModal = ({ deleteColor }) => {
	const dispatch = useDispatch();

	const colorIdState = useSelector((state) => state.colorIdState);
	const { colorId } = colorIdState;

	const onDelete = () => {
		deleteColor(colorId);
		dispatch(hideEditModal());
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
					maxLength='16'
					placeholder='Enter name...'
					autoFocus
				/>
				<br />
				<div id='delete-btn' className='modal-btn' onClick={onDelete}>
					Delete
				</div>
				<div
					id='done-btn'
					className='modal-btn'
					onClick={() => dispatch(hideEditModal())}>
					Done
				</div>
			</div>
		</div>
	);
};

export default connect(null, { deleteColor })(EditModal);
