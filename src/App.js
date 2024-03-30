import './App.css';
import DateTime from './components/DateTime';
import Emoji from './components/Emoji';
import Weather from './components/Weather';
import TempBox from './components/tempBox';
import WeatheStatus from './components/weatheStatus';

function App() {
  return (
    <div className="App flex justify-center space-y-5 flex-col items-center backgroundCold w-full h-lvh">
      <Weather />
      <DateTime/>
      <TempBox/>
      <WeatheStatus/>
      <Emoji/>
    </div>
  );
}

export default App;
