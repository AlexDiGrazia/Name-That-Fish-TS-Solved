import "./styles/final-score.css";

type FinalScoreProps = {
  score: { correct: number; inCorrect: number };
  totalCount: number;
};

export const FunctionalFinalScore = ({
  score,
  totalCount,
}: FinalScoreProps) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{score.correct}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
