import React from 'react';
import ToggleBtn from '../src/components/layout/ToggleBtn';
import Palette from '../src/components/layout/Palette';
import EditModal from '../src/components/modals/EditModal';
import AddModal from '../src/components/modals/AddModal';
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
        {/* <AddModal /> */}
      </div>
    </Provider>
  );
}

export default App;
