import React from 'react';
import Settings from '../src/components/layout/Settings';
import ToggleBtn from '../src/components/layout/ToggleBtn';
import Palette from '../src/components/layout/Palette';
import EditModal from '../src/components/modals/EditModal';
import AddModal from '../src/components/modals/AddModal';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ToggleBtn />
      {/* <Settings /> */}
      <Palette />
      {/* <EditModal /> */}
      {/* <AddModal /> */}
    </div>
  );
}

export default App;
