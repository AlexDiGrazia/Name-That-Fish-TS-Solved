import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";

export function FunctionalApp() {
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [score, setScore] = useState({ correct: 0, inCorrect: 0 });

  const showGameDashboard = correctAnswer + wrongAnswer < 4;
  return (
    <>
      {showGameDashboard ? (
        <>
          <FunctionalScoreBoard
            index={index}
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
          />
          <FunctionalGameBoard
            index={index}
            setIndex={setIndex}
            correctAnswer={correctAnswer}
            wrongAnswer={wrongAnswer}
            setCorrectAnswer={setCorrectAnswer}
            setWrongAnswer={setWrongAnswer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <FunctionalFinalScore correctAnswer={correctAnswer} />
      )}
    </>
  );
}
