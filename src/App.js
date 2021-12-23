import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';
import About from './components/pages/About';

import './App.css';
import JustColorTitle from './components/layout/JustColorTitle';

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
						<JustColorTitle />
						<PaletteToggleBtn />
						{toggleAppendModal && <AppendModal />}
						{toggleEditModal && <EditModal />}
						{togglePalette && <Palette />}
					</Route>
					<Route exact path='/about' component={About} />
				</Switch>

				<ToastContainer
					position='top-left'
					autoClose={4000}
					hideProgressBar
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
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
