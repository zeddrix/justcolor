import React, { Fragment } from 'react';
import Sharingbuttons from './Sharingbuttons';

const Settings = () => {
  return (
    <Fragment>
      <div className="flex-div">
        <div id="settings__div">
          <p className="settings-p">Settings</p>
          <p className="settings__div__headers">About</p>
          <p className="settings__div__info">JustColor is created by
					<a
              className="settings__div__info-link"
              href="https://zeddrix.com/about-zedd/"
              target="__blank__"> Zeddrix Fabian</a>.
          Learn more about JustColor<a
              className="settings__div__info-link"
              href="https://zeddrix.com/about-justcolor-version-1/"
              target="__blank__"> here</a>.
				</p>
          <p className="settings__div__headers">Share</p>
          <p className="settings__div__info">
            Share this app with your family and friends!
				</p>
          <Sharingbuttons />
        </div>
      </div>
    </Fragment>
  )
}

export default Settings
