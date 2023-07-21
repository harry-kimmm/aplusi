import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyListSubheader from '@mui/material/ListSubheader';


export default function Generate(props) {
    const setPage = props.setPage
    const [count, setCount] = useState(0);
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
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Subjects & Chapters</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={userInput}
                                onChange={(event) => {
                                    setUserInput(event.target.value)
                                }}
                                autoWidth
                                label="Age"
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
                                <MenuItem value="AP United States History specifically on the the period of 1491-1607. The problems should take the form of those on the APUSH exam where there are excerpts and documents the questions are based on. Do not make an excerpt for every single question but instead make some questions based on the same excerpt.">Period 1: 1491-1607</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button
                        onClick={onClick}
                        variant="contained"
                    >
                        Generate
                    </Button>

                </Grid>
                <Grid item xs={8}>
                    <div dangerouslySetInnerHTML={{ __html: aiAnswer }}></div>
                </Grid>
            </Grid>


        </>
    )
}