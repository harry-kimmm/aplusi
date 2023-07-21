import * as React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './styles/App.css';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import Home from './components/Home';
import Generate from './components/Generate';


export default function App() {

  // setPage is a function that we pass to the child components. 
  // They can call the function to change page here.
  const [page, setPage] = useState("home");

  if (page === "home") {
    return <Home setPage={setPage} />
  } else if (page === "generate") {
    return <Generate setPage={setPage} />
  } else {
    return (
      <>
        page not found
      </>
    )
  }
}