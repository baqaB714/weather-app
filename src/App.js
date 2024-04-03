import { useState } from 'react';
import './App.css';
import DateTime from './components/DateTime';
import Emoji from './components/Emoji';
import Weather from './components/Weather';
import TempBox from './components/tempBox';
import WeatheStatus from './components/weatheStatus';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  const [backMode, setBackMode] = useState('backgroundCold')


  return (
    <Provider store={store}>
      <div className={`App flex justify-center space-y-5 flex-col items-center ${backMode} w-full h-lvh`}>
        <Weather />
        <DateTime />
        <TempBox />
        <WeatheStatus />
        <Emoji />
      </div>
    </Provider>
  );
}

export default App;
