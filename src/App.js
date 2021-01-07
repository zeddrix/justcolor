import React from 'react';
import ToggleBtn from '../src/components/layout/ToggleBtn';
import Palette from '../src/components/layout/Palette';
import EditModal from '../src/components/modals/EditModal';
import AppendModal from './components/modals/AppendModal';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ToggleBtn />
        <Palette />
        {/* <EditModal /> */}
        {/* <AppendModal /> */}
      </div>
    </Provider>
  );
}

export default App;
