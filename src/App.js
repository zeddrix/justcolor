import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';

import './App.css';

const App = () => {
	useEffect(() => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
	}, []);

	const toggleShowAppendModal = useSelector(
		(state) => state.toggleShowAppendModalState.show
	);

	const toggleShowEditModal = useSelector(
		(state) => state.toggleShowEditModalState.show
	);

	const togglePalette = useSelector((state) => state.togglePaletteState.show);

	return (
		<div className='App'>
			<SettingsToggleBtn />
			<PaletteToggleBtn />
			{toggleShowAppendModal && <AppendModal />}
			{toggleShowEditModal && <EditModal />}
			{togglePalette && <Palette />}
		</div>
	);
};

export default App;
