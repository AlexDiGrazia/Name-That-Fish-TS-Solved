import { Component } from "react";
import "./styles/score-board.css";

type ScoreBoardProps = {
  correct: number;
  inCorrect: number;
  answersLeft: string[];
};

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    const { correct, inCorrect, answersLeft } = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {inCorrect}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correct}</div>
      </div>
    );
  }
}
