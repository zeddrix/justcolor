import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showAppendModal } from '../../actions/modalActions';
import './ColorButtons.css';

const AppendBtn = () => {
	const dispatch = useDispatch();
	const currentBG = useRef(null);

	useEffect(() => {
		currentBG.current.style.backgroundColor =
			document.body.style.backgroundColor;
	});
	return (
		<button
			className='append-btn color-btn'
			onClick={() => dispatch(showAppendModal())}
			ref={currentBG}>
			+
		</button>
	);
};

export default AppendBtn;
