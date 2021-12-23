import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hideSettings } from '../../actions/modalActions';
import SharingButtons from '../layout/SharingButtons';
import './Settings.css';
import './../Scrollbar.css';

const Settings = () => {
	const dispatch = useDispatch();

	return (
		<div
			id='invisible-backdrop'
			onMouseDown={(e) =>
				e.target === document.querySelector('#invisible-backdrop') &&
				dispatch(hideSettings())
			}>
			<div id='settings'>
				<p className='settings-p'>Settings</p>
				<p className='settings__headers'>About</p>
				<p className='settings__info'>
					JustColor is created by{' '}
					<a
						className='settings__info-link'
						href='https://zeddrix.com/about-zedd/'
						target='__blank__'>
						Zeddrix Fabian
					</a>
					. Learn more about JustColor{' '}
					<Link to='/about'>
						<span className='settings__info-link'>here</span>
					</Link>
					.
				</p>
				<p className='settings__headers'>Share</p>
				<p className='settings__info'>
					Share this app with your family and friends!
				</p>
				<SharingButtons />
			</div>
		</div>
	);
};

export default Settings;
