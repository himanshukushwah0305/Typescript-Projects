import React from "react";
import Board from "./Board/Board";
import Header from "./Header/Header";
import { Wrapper } from "./Parent.styles";

const Parent = () => {
  return (
    <Wrapper>
      <Header />
      <Board />
    </Wrapper>
  );
};

export default Parent;
