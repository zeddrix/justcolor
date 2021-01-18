import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showAppendModal } from '../../actions/modalActions';

const AppendBtn = () => {
	const dispatch = useDispatch();
	const currentBG = useRef(null);

	useEffect(() => {
		currentBG.current.style.backgroundColor =
			document.body.style.backgroundColor;
	});
	return (
		<button
			className='append-btn'
			onClick={() => dispatch(showAppendModal())}
			ref={currentBG}>
			+
		</button>
	);
};

export default AppendBtn;
