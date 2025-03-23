import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Score from "./Score";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const getRandomDice = (min: number, max: number) => {
    if (selectedNumber == -1) {
      setError("You have not selected any number");
      return;
    }

    return Math.floor(Math.random() * (max - min) + min) || -1;
  };

  const roleDice = () => {
    const randomDice = getRandomDice(1, 7);
    setCurrentDice(randomDice || 1);

    if (selectedNumber == -1) return;
    if (selectedNumber == randomDice) {
      setScore((prev) => prev + randomDice);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(-1);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <main>
      <Score score={score} />
      <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <button className="reset-btn" onClick={resetScore}>
          Reset
        </button>
        <button onClick={() => setShowRules((prev) => !prev)}>
          Show Rules
        </button>
      </div>
      {showRules && <Rules />}
    </main>
  );
};

export default GamePlay;
