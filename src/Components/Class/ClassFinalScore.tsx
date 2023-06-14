import { Component } from "react";

const totalCount = 0;
const correctCount = 0;

export class ClassFinalScore extends Component {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctCount}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
