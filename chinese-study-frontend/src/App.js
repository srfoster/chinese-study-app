import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactPlayer
          url='/clip1.mp4'
          controls={true}
        />
      </header>
    </div>
  );
}

export default App;
