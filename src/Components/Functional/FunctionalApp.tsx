import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../constants";
import { useState } from "react";

export function FunctionalApp() {
  const [score, setScore] = useState({ correct: 0, inCorrect: 0 });

  const index = score.correct + score.inCorrect;
  const currentFish = initialFishes[index];
  const answersLeft = initialFishes.map((obj) => obj.name).slice(index);
  const totalCount = initialFishes.length;
  const gameInProgress = index !== 4;

  const handleAnswer = (userInput: string) => {
    const valueToAdd = userInput === currentFish.name ? [1, 0] : [0, 1];
    setScore({
      correct: score.correct + valueToAdd[0],
      inCorrect: score.inCorrect + valueToAdd[1],
    });
  };

  return (
    <>
      {gameInProgress ? (
        <>
          <FunctionalScoreBoard score={score} answersLeft={answersLeft} />
          <FunctionalGameBoard
            handleAnswer={handleAnswer}
            currentFish={currentFish}
          />
        </>
      ) : (
        <FunctionalFinalScore score={score} totalCount={totalCount} />
      )}
    </>
  );
}
