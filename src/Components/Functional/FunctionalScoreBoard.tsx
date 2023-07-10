import "./styles/score-board.css";
const answersLeft = ["trout", "salmon", "tuna", "shark"];

type FunctionalScoreBoardProps = {
  index: number;
  correctAnswer: number;
  wrongAnswer: number;
};

export function FunctionalScoreBoard({
  index,
  correctAnswer,
  wrongAnswer,
}: FunctionalScoreBoardProps) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {wrongAnswer}</div>
      <div id="choices-left">
        {answersLeft.slice(index).map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctAnswer}</div>
    </div>
  );
}
