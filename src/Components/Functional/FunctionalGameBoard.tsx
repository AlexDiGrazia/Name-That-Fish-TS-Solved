import "./styles/game-board.css";
import { useState } from "react";

type GameBoardProps = {
  index: number;
  setIndex: (index: number) => void;
  score: { correct: number; inCorrect: number };
  setScore: (score: { correct: number; inCorrect: number }) => void;
  currentFish: { name: string; url: string };
};

export function FunctionalGameBoard({
  index,
  setIndex,
  score,
  setScore,
  currentFish,
}: GameBoardProps) {
  const [userInput, setUserInput] = useState("");

  const { correct, inCorrect } = score;
  const scoreParams =
    userInput.toLowerCase() === currentFish.name
      ? { correct: correct + 1, inCorrect }
      : { correct, inCorrect: inCorrect + 1 };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          setUserInput("");
          setScore(scoreParams);
          index < 3 && setIndex(index + 1);
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
