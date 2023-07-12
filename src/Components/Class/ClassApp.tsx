import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants";

export class ClassApp extends Component {
  state = {
    correct: 0,
    inCorrect: 0,
  };

  handleUserInput = (userInput: string) => {
    const keyToUpdate =
      userInput.toLowerCase() ===
      initialFishes[this.state.correct + this.state.inCorrect].name
        ? "correct"
        : "inCorrect";
    this.setState((prev: { correct: number; inCorrect: number }) => ({
      ...prev,
      [keyToUpdate]: prev[keyToUpdate] + 1,
    }));
  };

  render() {
    const { correct, inCorrect } = this.state;

    const index = correct + inCorrect;
    const currentFish = initialFishes[index];
    const answersLeft = initialFishes.map((obj) => obj.name).slice(index);
    const totalCount = initialFishes.length;

    const gameInProgress = index !== 4;

    return (
      <>
        {gameInProgress ? (
          <>
            <ClassScoreBoard
              correct={correct}
              inCorrect={inCorrect}
              answersLeft={answersLeft}
            />
            <ClassGameBoard
              currentFish={currentFish}
              handleUserInput={this.handleUserInput}
            />
          </>
        ) : (
          <ClassFinalScore correct={correct} totalCount={totalCount} />
        )}
      </>
    );
  }
}
