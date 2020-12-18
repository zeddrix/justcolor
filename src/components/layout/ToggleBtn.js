import React, { Fragment } from 'react';

const ToggleBtn = () => {
  return (
    <Fragment>
      <header>
        <div className="settings__toggle-btn__div">
          <div id="settings__toggle-btn">
            <span className="circle colored"></span>
            <span className="circle colored"></span>
            <span className="circle colored"></span>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default ToggleBtn
