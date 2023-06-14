import { Component } from "react";
import "./styles/score-board.css";

const incorrectCount = 0;
const correctCount = 0;
const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
