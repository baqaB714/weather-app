import './App.css';
import DateTime from './components/DateTime';
import Emoji from './components/Emoji';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App flex justify-center flex-col items-center backgroundCold w-full h-lvh">
      <Weather />
      <DateTime/>
      <Emoji/>
    </div>
  );
}

export default App;
