import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSettings } from '../../actions/modalActions';
import Settings from '../modals/Settings';

const SettingsToggleBtn = () => {
	const dispatch = useDispatch();

	const toggleSettings = useSelector((state) => state.toggleSettingsState.show);

	return (
		<div className='settings__toggle-btn__div'>
			<div id='settings__toggle-btn' onClick={() => dispatch(showSettings())}>
				<span
					className={
						'circle ' + (toggleSettings ? 'transparent' : 'colored')
					}></span>
				<span
					className={
						'circle ' + (toggleSettings ? 'transparent' : 'colored')
					}></span>
				<span
					className={
						'circle ' + (toggleSettings ? 'transparent' : 'colored')
					}></span>
			</div>
			{toggleSettings && <Settings />}
		</div>
	);
};

export default SettingsToggleBtn;
