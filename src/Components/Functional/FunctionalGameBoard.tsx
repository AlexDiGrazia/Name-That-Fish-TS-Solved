import "./styles/game-board.css";
import { initialFishes } from "../../constants";
import { useState } from "react";

type FunctionalGameBoardProps = {
  index: number;
  setIndex: (index: number) => void;
  correctAnswer: number;
  wrongAnswer: number;
  setCorrectAnswer: (score: number) => void;
  setWrongAnswer: (score: number) => void;
  score: { correct: number; inCorrect: number };
  setScore: (score: { correct: number; inCorrect: number }) => void;
};

export function FunctionalGameBoard({
  index,
  setIndex,
  correctAnswer,
  wrongAnswer,
  setCorrectAnswer,
  setWrongAnswer,
  score,
  setScore,
}: FunctionalGameBoardProps) {
  const [userInput, setUserInput] = useState("");
  const currentFish = initialFishes[index];
  const params =
    userInput.toLowerCase() === currentFish.name
      ? { correct: score.correct + 1, inCorrect: score.inCorrect }
      : { correct: score.correct, inCorrect: score.inCorrect + 1 };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          console.log(typeof setScore);
          e.preventDefault();
          userInput.toLowerCase() === currentFish.name
            ? setCorrectAnswer(correctAnswer + 1)
            : setWrongAnswer(wrongAnswer + 1);
          index < 3 && setIndex(index + 1);
          setUserInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
