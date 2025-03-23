interface RoleDiceProps {
  currentDice: number;
  roleDice: (value: number) => void;
}

const RoleDice = ({ currentDice, roleDice }: RoleDiceProps) => {
  return (
    <div className="dice-container" onClick={() => roleDice(currentDice)}>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
      <p>Click on the Dice to roll</p>
    </div>
  );
};

export default RoleDice;
