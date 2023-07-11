import "./styles/game-board.css";
import { useState } from "react";

type GameBoardProps = {
  currentFish: { name: string; url: string };
  handleAnswer: (fishName: string) => void;
};

export function FunctionalGameBoard({
  currentFish,
  handleAnswer,
}: GameBoardProps) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAnswer(userInput);
    setUserInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
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
