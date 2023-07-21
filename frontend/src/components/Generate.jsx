import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import axios from 'axios';
import { Button, Container, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyListSubheader from '@mui/material/ListSubheader';



export default function Generate(props) {
    const setPage = props.setPage
    const [aiAnswer, setAiAnswer] = useState("");
    const [userInput, setUserInput] = useState("");


    const onClick = () => {
        axios.get('http://127.0.0.1:8000/chat/' + userInput)
            .then((response) => {
                console.log(response.data);
                setAiAnswer(response.data);
            });
    }

    return (
        <>

            <Button color="error" sx={{ borderRadius: 28 }} variant="contained" onClick={() => setPage("home")}>← Home</Button>
            <pre className="small-text">                                                                                Choose a chapter from a subject and click "Generate" to make a list of 10 practice multiple choice problems.</pre>
            <Container maxWidth="xs">

                <FormControl sx={{ m: 1, minWidth: 200 }} color="error">
                    <InputLabel id="demo-simple-select-autowidth-label">Input</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={userInput}
                        onChange={(event) => {
                            setUserInput(event.target.value)
                        }}
                        autoWidth
                        label="Input"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MyListSubheader>AP Computer Science A</MyListSubheader>
                        <MenuItem value="AP Computer Science A specifically on Introductory Java Language Features and make sure to include questions that have code">Introductory Java Features</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Classes and Objects and make sure to include questions that have code">Classes and Objects</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Inheritance and Polymorphism and make sure to include questions that have code">Inheritance and Polymorphism</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Standard Classes and make sure to include questions that have code">Standard Classes</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Program Design and Analysis and make sure to include questions that have code">Program Design and Analysis</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Arrays and Array Lists and make sure to include questions that have code">Arrays and Array Lists</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Recursion and make sure to include questions that have code">Recursion</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Sorting and Searching and make sure to include questions that have code">Sorting and Searching</MenuItem>
                        <MyListSubheader>AP United States History</MyListSubheader>
                        <MenuItem value="AP United States History specifically on the the period of 1491-1607. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 1: 1491-1607</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1607-1754. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 2: 1607-1754</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1754-1800. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 3: 1754-1800</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1800-1848. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 4: 1800-1848</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1844-1877. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 5: 1844-1877</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1865-1898. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 6: 1865-1898</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1890-1945. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 7: 1890-1945</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1945-1980. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 8: 1945-1980</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1989-Present. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 9: 1989-Present</MenuItem>
                    </Select>
                    <Button
                        onClick={onClick}
                        variant="contained"
                        color="error"
                    >
                        Generate
                    </Button>
                </FormControl>
            </Container>


            <Container maxWidth="md">
                <Box sx={{ width: 1 }}>
                    <div max-width="250px" dangerouslySetInnerHTML={{ __html: aiAnswer }}></div>
                </Box>
            </Container>


        </>
    )
}