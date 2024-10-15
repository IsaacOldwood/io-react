import { useState } from "react";
import "./Hangman.css";

function GuessBox({changeHandler}) {
  return <input className="guess-box" type="text" maxLength="1" onChange={(e) => changeHandler(e.target.value)}/>;
}

function GuessButton() {
  return <button className="guess-button">Guess</button>;
}

function Hangman() {
  let answer = "Hello world";
  const [guess, setGuess] = useState("");

  return (
    <div>
      <h2>Hangman</h2>
      <GuessBox changeHandler={setGuess}/>
      <GuessButton />
    </div>
  );
}

export default Hangman;
