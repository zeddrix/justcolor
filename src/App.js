import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';
import Toast from './components/Toast';
import About from './components/pages/About';

import './App.css';

const App = ({ toggleAppendModal, toggleEditModal, togglePalette }) => {
	useEffect(() => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
	}, []);

	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/'>
						<SettingsToggleBtn />
						<PaletteToggleBtn />
						{toggleAppendModal && <AppendModal />}
						{toggleEditModal && <EditModal />}
						{togglePalette && <Palette />}
						<Toast />
					</Route>
					<Route exact path='/about' component={About} />
				</Switch>
			</div>
		</Router>
	);
};

const mapStateToProps = (state) => ({
	toggleAppendModal: state.toggleAppendModalState,
	toggleEditModal: state.toggleEditModalState,
	togglePalette: state.togglePaletteState,
});

export default connect(mapStateToProps)(App);
