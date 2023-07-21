import React from 'react'
import TextTransition, { presets } from 'react-text-transition';
import { Button, TextField, Container } from '@mui/material';
import backgroundBlur from "./red-blur.png";




const TEXTS = ['AP Computer Science', 'APUSH'];

function Home(props) {
  const setPage = props.setPage;
  const [index, setIndex] = React.useState(0);

  console.log(typeof setPage)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <ul className="nav">
        <li>  </li>
      </ul>

      <img src={backgroundBlur} alt="bg" />
      <div className="main-page">
        <h1>A+I</h1>
        <div className="alternate">
          <h3 className="black-text">Generate quality practice content for</h3>
          <h3 className="alttext">
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
          </h3>
        </div>
        <div className="paragraph">
          <pre className="small-text">
            A+I is an AI powered tool that generates effective practice
          </pre>
          <pre className="small-text">
            problems, removing financial barriers to achieving your dreams
          </pre>
        </div>
        <Button color="error" sx={{ borderRadius: 28 }} variant="contained" onClick={() => setPage("generate")}>Start practicing →</Button>

      </div>

    </>
  )
}

export default Home;