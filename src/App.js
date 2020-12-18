import React from 'react';
import Settings from '../src/components/layout/Settings';
import ToggleBtn from '../src/components/layout/ToggleBtn';
import Palette from '../src/components/layout/Palette';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ToggleBtn />
      <Settings />
      <Palette />
    </div>
  );
}

export default App;
