import { useState } from 'react'
import * as React from 'react';
import axios from 'axios';
import { Button, TextField, Container } from '@mui/material';


function App() {
    const [aiAnswer, setAiAnswer] = useState("");
    const [userInput, setUserInput] = useState("")
    const [count, setCount] = useState(0)

    const onClick = () => {
        axios.get('http://127.0.0.1:8000/chat/' + userInput)
            .then((response) => {
                console.log(response.data);
                setAiAnswer(response.data);
            });
    }


    return (
        <>
            <Container maxWidth="xs">
                <TextField
                    id="outlined-controlled"
                    label="Enter prompt"
                    value={userInput}
                    onChange={(event) => {
                        setUserInput(event.target.value)
                    }}
                />
                <Button
                    onClick={onClick}
                    variant="contained"
                >
                    Generate
                </Button>
            </Container>
            <Container maxWidth="md">
                <div dangerouslySetInnerHTML={{ __html: aiAnswer }}></div>
            </Container>

        </>
    )
}
export default App

