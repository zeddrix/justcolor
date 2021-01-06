import React from 'react';
import Sharingbuttons from './Sharingbuttons';

const Settings = () => {
  return (
    <div id="invisible-backdrop">
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
