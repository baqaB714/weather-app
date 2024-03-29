import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App flex justify-center flex-col items-center backgroundNormal2 w-full h-lvh">
      <Weather />
      <div className='w-full flex justify-center'>
          <img className='w-20' src='/assets/images/emojiN.png'>
          </img>
      </div>
    </div>
  );
}

export default App;
