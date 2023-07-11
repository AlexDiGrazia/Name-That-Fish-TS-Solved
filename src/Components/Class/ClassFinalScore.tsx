import { Component } from "react";

type FinalScoreProps = {
  correct: number;
  totalCount: number;
};

export class ClassFinalScore extends Component<FinalScoreProps> {
  render() {
    const { correct, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correct}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
