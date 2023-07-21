import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import axios from 'axios';
import { Button, Container, Box } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import LoadingButton from '@mui/lab/LoadingButton';



export default function Generate(props) {
    const setPage = props.setPage
    const [aiAnswer, setAiAnswer] = useState("");
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = React.useState(false);

    const onClick = () => {
        if (userInput != "") {
            setLoading(true)
            axios.get('http://127.0.0.1:8000/chat/' + userInput)
                .then((response) => {
                    console.log(response.data);
                    setAiAnswer(response.data);
                    setLoading(false)
                });
        }
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
                        <ListSubheader>AP Computer Science A</ListSubheader>
                        <MenuItem value="AP Computer Science A specifically on Introductory Java Language Features and make sure to include questions that have code">Introductory Java Features</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Classes and Objects and make sure to include questions that have code">Classes and Objects</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Inheritance and Polymorphism and make sure to include questions that have code">Inheritance and Polymorphism</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Standard Classes and make sure to include questions that have code">Standard Classes</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Program Design and Analysis and make sure to include questions that have code">Program Design and Analysis</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Arrays and Array Lists and make sure to include questions that have code">Arrays and Array Lists</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Recursion and make sure to include questions that have code">Recursion</MenuItem>
                        <MenuItem value="AP Computer Science A specifically on Sorting and Searching and make sure to include questions that have code">Sorting and Searching</MenuItem>
                        <MenuItem value="AP Computer Science A and make sure to include questions that have code">All Chapters</MenuItem>
                        <ListSubheader>AP United States History</ListSubheader>
                        <MenuItem value="AP United States History specifically on the the period of 1491-1607. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 1: 1491-1607</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1607-1754. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 2: 1607-1754</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1754-1800. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 3: 1754-1800</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1800-1848. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 4: 1800-1848</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1844-1877. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 5: 1844-1877</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1865-1898. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 6: 1865-1898</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1890-1945. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 7: 1890-1945</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1945-1980. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 8: 1945-1980</MenuItem>
                        <MenuItem value="AP United States History specifically on the the period of 1989-Present. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Period 9: 1989-Present</MenuItem>
                        <MenuItem value="AP United States History. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">All Chapters</MenuItem>
                        <ListSubheader>AP European History</ListSubheader>
                        <MenuItem value="AP European History specifically on Renaissance and Exploration. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Renaissance and Exploration</MenuItem>
                        <MenuItem value="AP European History specifically on Age of Reformation. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Age of Reformation</MenuItem>
                        <MenuItem value="AP European History specifically on Absolutism and Constitutionalism. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Absolutism and Constitutionalism</MenuItem>
                        <MenuItem value="AP European History specifically on Scientific, Philosophical, and Political Developments. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Scientific, Philosophical, and Political Developments</MenuItem>
                        <MenuItem value="AP European History specifically on Conflict, Crisis, and Reaction in the Late 18th Century. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Conflict, Crisis, and Reaction in the Late 18th Century</MenuItem>
                        <MenuItem value="AP European History specifically on Industrialization and Its Effects. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Industrialization and Its Effects</MenuItem>
                        <MenuItem value="AP European History specifically on 19th-Century Perspectives and Political Developments. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">19th-Century Perspectives and Political Developments</MenuItem>
                        <MenuItem value="AP European History specifically on 20th-Century Global Conflicts. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">20th-Century Global Conflicts</MenuItem>
                        <MenuItem value="AP European History specifically on Cold War and Contemporary Europe. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">Cold War and Contemporary Europe</MenuItem>
                        <MenuItem value="AP European History. Make sure every 2-3 questions are based on a supporting excerpt so that in the end, there should be 3-5 excerpts that the quesitons are based on.">All Chapters</MenuItem>
                        <ListSubheader>AP Biology</ListSubheader>
                        <MenuItem value="AP Biology specifically on the unit Chemistry of Life. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Chemistry of Life</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Cell Structure and Function. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Cell Structure and Function</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Cellular Energetics. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Cellular Energetics</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Cell Communication and Cell Cycle. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Cell Communication and Cell Cycle</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Heredity. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Heredity</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Gene Expression and Regulation. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Gene Expression and Regulation</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Natural Selection. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Natural Selection</MenuItem>
                        <MenuItem value="AP Biology specifically on the unit Ecology. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">Ecology</MenuItem>
                        <MenuItem value="AP Biology. Make sure the questions are similar to typical AP Biology MCQ problems, but also make it be in html elements.">All Chapters</MenuItem>
                        <ListSubheader>AP Calculus AB</ListSubheader>
                        <MenuItem value="AP Calculus AB specifically on the unit Limits and Continuity. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Limits and Continuity</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Differentiation: Definition and Fundamental Properties. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Differentiation: Definition and Fundamental Properties</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Differentiation: Composite, Implicit, and Inverse Functions. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Differentiation: Composite, Implicit, and Inverse Functions</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Contextual Applications of Differentiation. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Contextual Applications of Differentiation</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Analytical Applications of Differentiation. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Analytical Applications of Differentiation</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Integration and Accumulation of Change. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Integration and Accumulation of Change</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Differential Equations. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Differential Equations</MenuItem>
                        <MenuItem value="AP Calculus AB specifically on the unit Applications of Integration. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">Applications of Integration</MenuItem>
                        <MenuItem value="AP Calculus AB. Make the questions like how they would be for the AP test. Make all of the questions distinct. Format all of the mathematical symbols and notation correctly.">All Chapters</MenuItem>

                    </Select>
                    <LoadingButton
                        onClick={onClick}
                        variant="contained"
                        color="error"
                        loading={loading}
                    >
                        <span>Generate</span>
                    </LoadingButton>
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