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
import React from "react"
import TextField from '@mui/material/TextField';
//import { useLocalStorage } from "@uidotdev/usehooks";
//import { useLocalStorage } from 'usehooks-ts'
import { useLocalStorage } from 'react-use';

let originalData = [
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
  {
    clip: '/clips/clip3.mp4',
    hanzi: "??????",
    pinyin: "??????",
    english: "???????",
    source: "Love O2O",
    learningLevel: 0
  },
]


function BasicCard(props) {
  let [userAnswer, setUserAnswer] = React.useState("")

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        { props.card.hanzi }
        { props.card.english }
        <ReactPlayer
          url={ props.card.clip }
          controls={true}
        />
        <Slider
          min={0} max={5} step={1}
          value={props.card.learningLevel}
          onChange={(event, value, activeThumb) => {
            console.log("Slider changed", value)

            props.setData(props.data.map((x) => {
              if (x === props.card) {
                return {...x, learningLevel: value}
              } else {
                return x
              }
            }))

          }}    
          aria-label="Default"
          valueLabelDisplay="on" />
      </CardContent>
      <CardActions>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"
           onChange={(event) => setUserAnswer(event.target.value)} 
        />
        <Button onClick={() => { 
          if (userAnswer === props.card.hanzi) {
            alert("Correct!")
          } else {
            alert("Incorrect")
          }
        } } variant="outlined">Check Answer</Button>

        <Button onClick={() => {
          if (props.cardIndex === 0) {
            props.setCardIndex(props.data.length - 1)
          } else {
            props.setCardIndex(props.cardIndex - 1)
          }
        }} variant="outlined">Prev Card</Button>

        <Button onClick={() => {
          if (props.cardIndex === props.data.length - 1) {
            props.setCardIndex(0)
          } else {
            props.setCardIndex(props.cardIndex + 1)
          }
        }} variant="outlined">Next Card</Button>
      </CardActions>
    </Card>
  );
}


function App() {
  // Make a state variable to store the current card's index
  const [cardIndex, setCardIndex] = React.useState(0)
//  const [cards, setCards]         = React.useState(originalData)
  const [cards, setCards] = useLocalStorage("cards", originalData)

  return (
    <div className="App">
      <header className="App-header">
        { cardIndex + 1 } of { cards.length}
        {<BasicCard
          card={cards[cardIndex]}
          setCardIndex={setCardIndex}
          cardIndex={cardIndex}
          data={cards}
          setData={setCards}
          />}
        <Button onClick={() => { 
          setCards([...shuffle(cards)])
          setCardIndex(0)
        }} variant="outlined">Shuffle</Button>

        <Button onClick={() => { 
          setCards([...sortByLearningLevel(cards)])
          setCardIndex(0)
        }} variant="outlined">Sort by Learning Level</Button>

      </header>
    </div>
  );
}

// Takes a list of cards and returns a list of cards sorted by learning level
function sortByLearningLevel(cards) {
  return cards.sort((a, b) => {
    return a.learningLevel - b.learningLevel
  })  
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


export default App;
