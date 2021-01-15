import React from 'react';
import { useDispatch } from 'react-redux';
import { showAppendModal } from '../../actions/modalActions';

const AppendBtn = () => {
	const dispatch = useDispatch();

	return (
		<button className='append-btn' onClick={() => dispatch(showAppendModal())}>
			+
		</button>
	);
};

export default AppendBtn;
