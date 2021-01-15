import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import SettingsToggleBtn from '../src/components/layout/SettingsToggleBtn';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import Palette from '../src/components/layout/Palette';
import PaletteToggleBtn from './components/layout/PaletteToggleBtn';
import { changeToArbitraryColor } from './components/colorBtns/ArbitraryBtn';

import './App.css';

const App = () => {
  useEffect(() => {
    changeToArbitraryColor()
  }, []);

  const toggleShowAppendModal = useSelector(
    (state) => state.toggleShowAppendModalState.show
  );

  const toggleShowEditModal = useSelector(
    (state) => state.toggleShowEditModalState.show
  );

  const togglePalette = useSelector(
    (state) => state.togglePaletteState.show
  );

  return (
    <div className="App">
      <SettingsToggleBtn />
      <PaletteToggleBtn />
      {toggleShowAppendModal && <AppendModal />}
      {toggleShowEditModal && <EditModal />}
      {togglePalette && <Palette />}
    </div>
  );
}

export default App;
