import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";

export function FunctionalApp() {
  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard />
      {false && <FunctionalFinalScore />}
    </>
  );
}
