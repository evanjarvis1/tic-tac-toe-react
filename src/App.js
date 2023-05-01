import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  let variableOfMyChoice = `String of my choice`;

  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);

  const [player, setPlayer] = useState(true);

  const handleReset = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  function calculateWinner(arr) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} wins!`;
      }
    }
    return "";
  }

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            />
          );
        })}
      </div>
      <div className="reset-button-div">
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <span className="">{calculateWinner(squares)}</span>
    </div>
  );
}

export default App;
