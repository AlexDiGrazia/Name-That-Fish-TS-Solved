import "./styles/score-board.css";

type ScoreBoardProps = {
  score: { correct: number; inCorrect: number };
  answersLeft: string[];
};

export function FunctionalScoreBoard({ score, answersLeft }: ScoreBoardProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {score.inCorrect}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {score.correct}</div>
    </div>
  );
}
