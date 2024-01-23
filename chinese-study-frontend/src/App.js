import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <ReactPlayer
          url='/clip1.mp4'
          controls={true}
        />
        <Slider
          min={0} max={5} step={1}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto" />
      </CardContent>
      <CardActions>
        <Button variant="outlined">Prev Card</Button>
        <Button variant="outlined">Next Card</Button>
      </CardActions>
    </Card>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicCard />
      </header>
    </div>
  );
}


export default App;
