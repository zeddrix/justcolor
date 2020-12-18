import './App.css';
import Settings from '../src/components/layout/Settings';
import ToggleBtn from '../src/components/layout/ToggleBtn';

const App = () => {
  return (
    <div className="App">
      <ToggleBtn />
      <h1>JustColor!</h1>
      <Settings />
    </div>
  );
}

export default App;
