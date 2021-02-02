import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPalette, hidePalette } from '../../actions/modalActions';

const PaletteToggleBtn = () => {
	const dispatch = useDispatch();
	const togglePalette = useSelector((state) => state.togglePaletteState);

	useEffect(() => {
		dispatch(showPalette());
	}, [dispatch]);

	return (
		<div
			id='palette-toggle-btn'
			onClick={
				togglePalette
					? () => dispatch(hidePalette())
					: () => dispatch(showPalette())
			}>
			{togglePalette ? '▼' : '▲'}
		</div>
	);
};

export default PaletteToggleBtn;
