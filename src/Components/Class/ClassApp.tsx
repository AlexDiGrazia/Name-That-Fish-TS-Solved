import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  render() {
    return (
      <>
        <>
          <ClassScoreBoard />
          <ClassGameBoard />
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
