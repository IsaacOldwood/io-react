import { useState } from "react";
import "./Hangman.css";

function GuessBox({ changeHandler }) {
  return <input className="guess-box" type="text" maxLength="1" onChange={(e) => changeHandler(e.target.value)} />;
}

function GuessButton() {
  return <button className="guess-button">Guess</button>;
}

function LetterBox({ letter }) {
  return <span className="letter-box">{letter}</span>;
}

function AnswerBoxes({ revealedAnswer }) {
  return (
    <div className="answer-boxes">
      {[...revealedAnswer].map((letter, index) => (
        <LetterBox key={index} letter={letter} />
      ))}
    </div>
  );
}

function revealAnswer(answer, guesses) {
  let revealedAnswer = "";
  for (const element of answer) {
    if (element === " ") {
      revealedAnswer += " ";
    } else if (guesses.includes(element)) {
      revealedAnswer += element;
    } else {
      revealedAnswer += "#";
    }
    console.log(revealedAnswer);
  }
  return revealedAnswer;
}

function Hangman() {
  let answer = "HELLO WORLD";
  let [guesses, setGuesses] = useState([]);
  let [revealedAnswer, setRevealedAnswer] = useState(revealAnswer(answer, []));

  function addGuess(guess) {
    if (guess === "") {
      return;
    } else if (guesses.includes(guess)) {
      return;
    } else {
      let newGuesses = [...guesses, guess];
      setGuesses(newGuesses);
      setRevealedAnswer(revealAnswer(answer, newGuesses));
    }
  }

  return (
    <div>
      <h2>Hangman</h2>
      <GuessBox changeHandler={addGuess} />
      <GuessButton />
      <AnswerBoxes revealedAnswer={revealedAnswer} />
    </div>
  );
}

export default Hangman;
