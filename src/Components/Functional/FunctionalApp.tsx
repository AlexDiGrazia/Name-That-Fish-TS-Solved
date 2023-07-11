import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../constants";
import { useState } from "react";

export function FunctionalApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, inCorrect: 0 });

  const currentFish = initialFishes[index];
  const answersLeft = initialFishes.map((obj) => obj.name).slice(index);
  const totalCount = initialFishes.length;

  const gameInProgress = score.correct + score.inCorrect < 4;
  return (
    <>
      {gameInProgress ? (
        <>
          <FunctionalScoreBoard score={score} answersLeft={answersLeft} />
          <FunctionalGameBoard
            index={index}
            setIndex={setIndex}
            score={score}
            setScore={setScore}
            currentFish={currentFish}
          />
        </>
      ) : (
        <FunctionalFinalScore score={score} totalCount={totalCount} />
      )}
    </>
  );
}
