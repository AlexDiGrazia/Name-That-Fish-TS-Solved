import { Component } from "react";
import "./styles/game-board.css";

type GameBoardProps = {
  index: number;
  correct: number;
  inCorrect: number;
  currentFish: { name: string; url: string };
  userInput: string;
  handleState: (
    userInput: string,
    correct: number | undefined,
    inCorrect: number | undefined,
    index: number | undefined
  ) => void;
};

type StateParams = [
  string,
  number | undefined,
  number | undefined,
  number | undefined
];

export class ClassGameBoard extends Component<GameBoardProps> {
  render() {
    const { index, correct, inCorrect, currentFish, userInput, handleState } =
      this.props;

    const stateParams: StateParams =
      userInput.toLowerCase() === currentFish.name
        ? ["", correct + 1, inCorrect, index < 3 ? index + 1 : index]
        : ["", correct, inCorrect + 1, index < 3 ? index + 1 : index];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleState(...stateParams);
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userInput}
            onChange={(e) =>
              handleState(e.target.value, undefined, undefined, undefined)
            }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
