import './App.css';
import Pad from './components/Pad/Pad';
import Volume from './components/Volume/Volume';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Volume />
      <Pad />
    </div>
  );
}

export default App;
