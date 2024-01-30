import './App.css';
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import React from "react"
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom"
import NavBar from "./NavBar" 
import { useStopwatch } from 'react-timer-hook';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

let aslCards = [
  {
    clip: '/clips/asl/I-showed-up-and-no-one-here-incorrect2.mp4',
    correctClip: '/clips/asl/I-showed-up-and-no-one-here-correct2.mp4',
    type: "POA",
    english: "I showed up and no one was there",
    options: ["PO","L", "HS", "M", "F"],
    correctAnswer: 0,
  },
  {
    clip: '/clips/asl/I-showed-up-and-no-one-here-incorrect2.mp4',
    correctClip: '/clips/asl/I-showed-up-and-no-one-here-correct2.mp4',
    type: "POA",
    english: "I showed up and no one was there",
    options: ["PO","L", "HS", "M", "F"],
    correctAnswer: 0,
  },
]

let chineseCards = [
  {
    clip: '/clips/clip1.mp4',
    type: "basic-chinese",
    hanzi: "你要小心啊",
    pinyin: "nǐ yào xiǎoxīn a",
    english: "You have to be careful",
    source: "Love O2O",
    learningLevel: 0
  },
  {
    clip: '/clips/clip2.mp4',
    type: "basic-chinese",
    hanzi: "??????",
    pinyin: "??????",
    english: "???????",
    source: "Love O2O",
    learningLevel: 0
  },
  {
    clip: '/clips/clip3.mp4',
    type: "basic-chinese",
    hanzi: "??????",
    pinyin: "??????",
    english: "???????",
    source: "Love O2O",
    learningLevel: 0
  },
]

function BasicChineseCard(props){
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
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto" />
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

function POACard(props){
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {props.card.english}
        <ReactPlayer
          url={ props.card.clip }
          controls={true}
        />
      </CardContent>
      <CardActions>
        {props.card.options.map((x,i)=>{
          return <Button onClick={()=>{
            if(i === props.card.correctAnswer){
              props.gotItRight()
            }
          }}>{x}</Button>
        })}
      </CardActions>
    </Card>
  );
}

function BasicCard(props) {
  switch(props.card.type){
      case "basic-chinese":
        return <BasicChineseCard {...props} />
      case "POA":
        return <POACard {...props} />
  }
}


export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container maxWidth="md" sx={{pt: 2}}>
          <Routes>
            <Route path="/" element={<h1>Welcome.  Use the links above to pick a language.</h1>} />} />
            <Route path="/chinese" element={<Deck cards={chineseCards} startTime={new Date()} />} />
            <Route path="/asl" element={<Deck cards={aslCards} startTime={new Date()} />} />
          </Routes>
        </Container>
      </Router>    
    </>
  );
}


function Deck(props){
  // Make a state variable to store the current card's index
  const [cardIndex, setCardIndex] = React.useState(0)
  const [currentCorrect, setCurrentCorrect] = React.useState(false)

  React.useEffect(()=>{
    setCardIndex(0)
  },
  [props.startTime])

  const gotItRight = ()=>{
    setCurrentCorrect(true)
  }

  const prev = ()=>{
    if(cardIndex - 1 >= 0){
      setCardIndex(cardIndex - 1)
      setCurrentCorrect(false)
    }
  }

  const next = ()=>{
    if(cardIndex + 1 < props.cards.length){
      setCardIndex(cardIndex + 1)
      setCurrentCorrect(false)
    }
  }

  return <>
    <Gamification startTime={props.startTime} currentCorrect={currentCorrect} />
    {props.cards[cardIndex] && <BasicCard card={props.cards[cardIndex]}
                    gotItRight={gotItRight}
                    setCardIndex={setCardIndex}
                    cardIndex={cardIndex}
        />}
     <Button onClick={() => { prev() }} variant="outlined">Prev Card</Button>
     <Button onClick={() => { next()}} variant="outlined">Next Card</Button>
  </>
}

function Gamification(props){
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  React.useEffect(()=>{
    reset() 
  },
  [props.startTime])


  return (
    <div style={{textAlign: 'center'}}>
        {props.currentCorrect && <MyConfetti />}
        {props.currentCorrect && "You got it!"}
        <div>{seconds}</div>
    </div>
  );
 
}

function AllCards(props) {
  return props.cards.map((x) => {
    return <BasicCard card={x} />
  })
}


let MyConfetti = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

