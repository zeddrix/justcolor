import React from 'react';
import { hideSettings } from '../../actions/modalActions';
import Sharingbuttons from '../layout/Sharingbuttons';
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();

  return (
    <div id="invisible-backdrop" onClick={() => {
      dispatch(hideSettings());
    }}>
      <div id="settings">
        <p className="settings-p">Settings</p>
        <p className="settings__headers">About</p>
        <p className="settings__info">JustColor is created by
					<a
            className="settings__info-link"
            href="https://zeddrix.com/about-zedd/"
            target="__blank__"> Zeddrix Fabian</a>.
          Learn more about JustColor<a
            className="settings__info-link"
            href="https://zeddrix.com/about-justcolor-version-1/"
            target="__blank__"> here</a>.
				</p>
        <p className="settings__headers">Share</p>
        <p className="settings__info">
          Share this app with your family and friends!
				</p>
        <Sharingbuttons />
      </div>
    </div>
  )
}

export default Settings
