import { useState } from "react";
import "./Hangman.css";

function GuessBox({ changeHandler }) {
  return (
    <input
      className="guess-box"
      type="text"
      maxLength="1"
      onChange={(e) => changeHandler(e.target.value)}
      placeholder="Guess a letter"
    />
  );
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
  }
  return revealedAnswer;
}

function getRandomAnswer(wordList) {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function Hangman() {
  const wordList = ["HELLO WORLD", "GOODBYE WORLD", "REACT APP", "HANGMAN GAME"];
  const [lives, setLives] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const [livesText, setLivesText] = useState("Lives: " + lives);
  const [answer] = useState(getRandomAnswer(wordList));
  const [guesses, setGuesses] = useState([]);
  const [revealedAnswer, setRevealedAnswer] = useState(revealAnswer(answer, []));

  function addGuess(guess) {
    if (gameOver || winner || guess === "") {
      return;
    }

    guess = guess.toUpperCase();
    if (guesses.includes(guess)) {
      return;
    } else {
      let newGuesses = [...guesses, guess];
      let newRevealedAnswer = revealAnswer(answer, newGuesses);
      setGuesses(newGuesses);
      setRevealedAnswer(newRevealedAnswer);

      console.log(answer, newRevealedAnswer);
      if (answer === newRevealedAnswer) {
        setWinner(true);
        setLivesText("You Win!");
      } else if (!answer.includes(guess)) {
        let newLives = lives - 1;
        setLives(newLives);
        if (newLives === 0) {
          setGameOver(true);
          setLivesText("Game Over!");
        } else {
          setLivesText("Lives: " + newLives);
        }
      }
    }
  }

  return (
    <div>
      <h2>Hangman</h2>
      <GuessBox changeHandler={addGuess} />
      <AnswerBoxes revealedAnswer={revealedAnswer} />
      <p>{livesText}</p>
    </div>
  );
}

export default Hangman;
