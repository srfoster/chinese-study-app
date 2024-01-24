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

let data = [
  {
    clip: '/clips/clip1.mp4',
    hanzi: "你要小心啊",
    pinyin: "nǐ yào xiǎoxīn a",
    english: "You have to be careful",
    source: "Love O2O",
    learningLevel: 0
  },
  {
    clip: '/clips/clip2.mp4',
    hanzi: "??????",
    pinyin: "??????",
    english: "???????",
    source: "Love O2O",
    learningLevel: 0
  },
]


function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        { props.card.hanzi }
        <ReactPlayer
          url={ props.card.clip }
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
        <BasicCard card={ data[0] } />
        <BasicCard card={ data[1] } />
      </header>
    </div>
  );
}


export default App;
