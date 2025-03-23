interface StartGameProps {
  toggle: () => void;
}
const StartGame = ({ toggle }: StartGameProps) => {
  return (
    <div className="container">
      <img src="./images/dices.png" alt="icon" />
      <div className="content">
        <h1 className="text">DICE GAME</h1>
        <button className="play-btn" onClick={toggle}>
          Play Now
        </button>
        <p className="author">Created By: Osan Rai</p>
      </div>
    </div>
  );
};

export default StartGame;
