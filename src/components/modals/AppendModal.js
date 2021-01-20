import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { hideAppendModal } from '../../actions/modalActions';
import { appendColor, showToast } from '../../actions/colorActions';

const AppendModal = ({ appendColor }) => {
	const dispatch = useDispatch();
	const [colorName, setColorName] = useState('');

	const onSubmit = () => {
		const newColor = {
			colorName,
			rgb: document.body.style.backgroundColor,
			id: uuid(),
		};
		appendColor(newColor);
		dispatch(hideAppendModal());
		setColorName('');
		showToast();
	};

	return (
		<div
			id='backdrop'
			onMouseDown={(e) => {
				e.target === document.querySelector('#backdrop') &&
					dispatch(hideAppendModal());
			}}>
			<div className='append-modal modal'>
				<p className='modal__description'>Name your new color button:</p>
				<input
					name='colorName'
					value={colorName}
					onChange={(e) => setColorName(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
					className='append-modal__input input-field'
					type='text'
					maxLength='16'
					placeholder='Enter name...'
					autoFocus
				/>
				<br />
				<div
					className='cancel-btn modal-btn'
					onClick={() => dispatch(hideAppendModal())}>
					Cancel
				</div>
				<div className='add-btn modal-btn' onClick={onSubmit}>
					Add!
				</div>
			</div>
		</div>
	);
};

export default connect(null, { appendColor })(AppendModal);
