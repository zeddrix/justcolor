import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { showSettings } from '../../actions/modalActions';
import Settings from '../modals/Settings';

const ToggleBtn = () => {
  const dispatch = useDispatch();

  const toggleShowSettings = useSelector(
    (state) => state.toggleShowSettingsState.show
  );

  return (
    <div className="settings__toggle-btn__div">
      <div id="settings__toggle-btn" onClick={() => dispatch(showSettings())}>
        <span className="circle colored"></span>
        <span className="circle colored"></span>
        <span className="circle colored"></span>
      </div>
      {toggleShowSettings && <Settings />}
    </div>
  )
};

export default ToggleBtn;
