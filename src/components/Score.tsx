interface scoreProps {
  score: number;
}

const Score = ({ score }: scoreProps) => {
  return (
    <div className="total-score">
      <h1 className="score">{score}</h1>
      <p className="score-text">TOTAL SCORE</p>
    </div>
  );
};

export default Score;
