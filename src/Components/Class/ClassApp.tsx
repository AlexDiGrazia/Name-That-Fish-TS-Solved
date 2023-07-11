import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../constants";

export class ClassApp extends Component {
  state = {
    userInput: "",
    correct: 0,
    inCorrect: 0,
    index: 0,
  };

  handleState = (
    userInput: string,
    correct: number | undefined = this.state.correct,
    inCorrect: number | undefined = this.state.inCorrect,
    index: number | undefined = this.state.index
  ) => this.setState({ userInput, correct, inCorrect, index });

  render() {
    const { userInput, correct, inCorrect, index } = this.state;

    const currentFish = initialFishes[index];
    const answersLeft = initialFishes.map((obj) => obj.name).slice(index);
    const totalCount = initialFishes.length;

    const gameInProgress = correct + inCorrect < 4;

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
              index={index}
              correct={correct}
              inCorrect={inCorrect}
              currentFish={currentFish}
              userInput={userInput}
              handleState={this.handleState}
            />
          </>
        ) : (
          <ClassFinalScore correct={correct} totalCount={totalCount} />
        )}
      </>
    );
  }
}
