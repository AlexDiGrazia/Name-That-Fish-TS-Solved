import { initialFishes } from "../../constants";
import "./styles/final-score.css";

const totalCount = initialFishes.length;

export const FunctionalFinalScore = ({
  correctAnswer,
}: {
  correctAnswer: number;
}) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctAnswer}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
