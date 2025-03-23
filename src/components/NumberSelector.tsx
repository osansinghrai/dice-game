interface NumberSelectorProps {
  setError: (value: string) => void;
  error: string;
  selectedNumber: number;
  setSelectedNumber: (value: number) => void;
}

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}: NumberSelectorProps) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value: number) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <main className="number-main ">
      <p className="error">{error}</p>
      <div className="number-selector">
        {arrNumber.map((value, index) => (
          <p
            className={`number-cell ${
              selectedNumber === value ? "selected" : null
            }`}
            key={index}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </p>
        ))}
      </div>{" "}
      <div className="number-text">
        <p>Select Number</p>
      </div>
    </main>
  );
};

export default NumberSelector;
