import React from 'react';
import { useSelector } from "react-redux";
import ToggleBtn from '../src/components/layout/ToggleBtn';
import Palette from '../src/components/layout/Palette';
import AppendModal from '../src/components/modals/AppendModal';
import EditModal from '../src/components/modals/EditModal';
import './App.css';

const App = () => {
  const toggleShowAppendModal = useSelector(
    (state) => state.toggleShowAppendModalState.show
  );

  const toggleShowEditModal = useSelector(
    (state) => state.toggleShowEditModalState.show
  );

  return (
    <div className="App">
      <ToggleBtn />
      <Palette />
      {toggleShowAppendModal && <AppendModal />}
      {toggleShowEditModal && <EditModal />}
    </div>
  );
}

export default App;
