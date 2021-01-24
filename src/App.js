import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';
import Toast from './components/Toast';
import { showToast, hideToast } from './actions/toastActions';

import './App.css';

const App = ({
	toggleAppendModal,
	toggleEditModal,
	togglePalette,
	showToast,
	hideToast,
	className,
}) => {
	useEffect(() => {
		document.body.style.backgroundColor =
			'#' + Math.floor(Math.random() * 16777215).toString(16);
	}, []);

	// const toast = () => {
	// 	<Toast className={className} />;
	// setTimeout(() => {
	// 	hideToast();
	// }, 1500);
	// };

	return (
		<div className='App'>
			<SettingsToggleBtn />
			<PaletteToggleBtn />
			{toggleAppendModal && <AppendModal />}
			{toggleEditModal && <EditModal />}
			{togglePalette && <Palette />}
			{showToast && <Toast className={className} />}
			{/* {showToast && toast()} */}
		</div>
	);
};

const mapStateToProps = (state) => ({
	toggleAppendModal: state.toggleAppendModalState.show,
	toggleEditModal: state.toggleEditModalState.show,
	togglePalette: state.togglePaletteState.show,
	className: state.toastState.className,
});

export default connect(mapStateToProps, { showToast, hideToast })(App);
