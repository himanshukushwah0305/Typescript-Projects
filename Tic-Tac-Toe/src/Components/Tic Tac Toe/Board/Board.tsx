import React, { useEffect, useState } from "react";
import Square, { Player } from "../Square/Square";
import { Wrapper } from "./Board.styles";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  const setSquaresValue = (index: number) => {
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  const calculateWinner = (squares: Player[]) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  useEffect(() => {
    const win = calculateWinner(squares);
    if (win) {
      setWinner(win);
    }
    if (!win && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  });

  return (
    <Wrapper>
      {!winner && <p>Hey {currentPlayer}, it's your turn!</p>}
      {winner && winner !== "BOTH" && <p>Congratulations {winner} </p>}
      {winner && winner === "BOTH" && (
        <p>Congratulations You're Both Winner </p>
      )}
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, i) => {
            return (
              <Square
                winner={winner}
                key={i}
                value={squares[i]}
                onClick={() => setSquaresValue(i)}
              />
            );
          })}
      </div>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </Wrapper>
  );
};

export default Board;
