import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../App";
import Cell from "./Cell";

function Board() {
  const row = (attempt) => {
    return (
      <div className="row">
        <Cell infoIdentifier={0} attemptVal={attempt} />
        <Cell infoIdentifier={1} attemptVal={attempt} />
        <Cell infoIdentifier={2} attemptVal={attempt} />
        <Cell infoIdentifier={3} attemptVal={attempt} />
        <Cell infoIdentifier={4} attemptVal={attempt} />
        <Cell infoIdentifier={5} attemptVal={attempt} />
      </div>
    );
  };

  return (
    <div className="board">
      {row(0)}
      {row(1)}
      {row(2)}
      {row(3)}
      {row(4)}
      {row(5)}
      {row(6)}
      {row(7)}
    </div>
  );
}

export default Board;
