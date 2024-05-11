import React from "react";
import { Wrapper } from "./Square.styles";

export type Player = "X" | "O" | 'BOTH' | null;

type SquareProps = {
  value: Player;
  winner: Player;
  onClick: () => void;
};

const Square = ({ value, onClick, winner }: SquareProps) => {
  return (
    <Wrapper>
      {!value ? (
        <button
          className="square"
          onClick={onClick}
          disabled={Boolean(winner)}
        />
      ) : (
        <button className={`square square_${value.toLowerCase()}`} disabled>
          {value}
        </button>
      )}
    </Wrapper>
  );
};

export default Square;
