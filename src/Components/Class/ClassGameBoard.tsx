import { Component } from "react";
import "./styles/game-board.css";

type GameBoardProps = {
  currentFish: { name: string; url: string };
  handleUserInput: (userInput: string) => void;
};

export class ClassGameBoard extends Component<GameBoardProps> {
  state = { userInput: "" };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.handleUserInput(this.state.userInput);
    this.setState({ userInput: "" });
  };

  render() {
    const { userInput } = this.state;
    const { currentFish } = this.props;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
