import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';

import './App.css';

const App = ({ toggleAppendModal, toggleEditModal, togglePalette }) => {
	useEffect(() => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
	}, []);

	return (
		<div className='App'>
			<SettingsToggleBtn />
			<PaletteToggleBtn />
			{toggleAppendModal && <AppendModal />}
			{toggleEditModal && <EditModal />}
			{togglePalette && <Palette />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	toggleAppendModal: state.toggleAppendModalState.show,
	toggleEditModal: state.toggleEditModalState.show,
	togglePalette: state.togglePaletteState.show,
});

export default connect(mapStateToProps)(App);
