import { useState } from 'react'
import './App.css'
import * as React from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';


function App() {
  /*const [aiAnswer, setAiAnswer] = useState("")
  const [userInput, setUserInput] = useState("")
  const [count, setCount] = useState(0)

  const onClick = () => {
    axios.get('http://127.0.0.1:8000/chat/' + userInput)
      .then((response) => {
        console.log(response.data);
        setAiAnswer(response.data);
      });
  }
  */



  return (
    <>
      <ul className="nav">
        <li><a href="/">Home</a></li>
      </ul>
      <div className="main-page">
        <h1>A+I</h1>
        <h3 className="black-text">Generate quality practice content for</h3>
        <h3><span> </span></h3>
        <div className="paragraph">
          <pre className="small-text">
            A+I is an AI powered tool that generates effective practice
          </pre>
          <pre className="small-text">
            problems, removing financial barriers to achieving your dreams
          </pre>
        </div>
        <a href="generate.html" target="_blank">
          <button>Start practicing →</button>
        </a>

      </div>

    </>
  )
}
export default App

/*        <TextField
          id="outlined-controlled"
          label="Controlled"
          value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value)
          }}
        />
        <Button
          onClick={onClick}
        >
          Ask AI
        </Button>
        <p>{aiAnswer}</p> */