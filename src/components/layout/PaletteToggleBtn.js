import { useDispatch, useSelector } from 'react-redux';
import { showPalette, hidePalette } from '../../actions/modalActions';
import './PaletteToggleBtn.css';

const PaletteToggleBtn = () => {
	const dispatch = useDispatch();
	const togglePalette = useSelector((state) => state.togglePaletteState);

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
