import React, { useContext } from "react";
import { AppContext } from "../App";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Cell({ infoIdentifier, attemptVal }) {
  const { board, correctPlayer } = useContext(AppContext);
  const cellInfo = board[attemptVal][infoIdentifier];
  let cellID = "small";

  if (infoIdentifier == 0 || infoIdentifier == 1) {
    cellID = "big";
  }

  if (attemptVal == 0) {
    cellID += "h";
  } else {
    switch (infoIdentifier) {
      // Player Name
      case 0:
        if (correctPlayer.player === cellInfo) {
          cellID += "c";
        }

        break;

      // College
      case 1:
        if (correctPlayer.college === cellInfo) {
          cellID += "c";
        }

        break;

      // Draft Year
      case 2:
        if (correctPlayer.year == cellInfo) {
          cellID += "c";
        } else if (cellInfo != 0) {
          const diff = correctPlayer.year - cellInfo;
          if (diff <= 5 && diff >= -5) {
            cellID += "a";
          }
          if (diff < 0) {
            cellID += "ph";
          } else {
            cellID += "pl";
          }
        }

        break;

      // Position
      case 3:
        if (correctPlayer.position == cellInfo) {
          cellID += "c";
        } else {
          const offense = ["QB", "RB", "T", "G", "C", "TE", "WR", "FB"];
          const defense = ["DT", "DE", "LB", "CB", "S"];
          const special = ["K", "P", "LS"];

          const correctPos = correctPlayer.position;

          if (offense.includes(correctPos)) {
            if (offense.includes(cellInfo)) {
              cellID += "a";
            }
          } else if (defense.includes(correctPos)) {
            if (defense.includes(cellInfo)) {
              cellID += "a";
            }
          } else {
            if (special.includes(cellInfo)) {
              cellID += "a";
            }
          }
        }

        break;

      // Draft Round
      case 4:
        if (correctPlayer.round == cellInfo) {
          cellID += "c";
        } else if (cellInfo != 0) {
          const diff = correctPlayer.round - cellInfo;
          if (diff <= 2 && diff >= -2) {
            cellID += "a";
          }
          if (diff < 0) {
            cellID += "ph";
          } else {
            cellID += "pl";
          }
        }

        break;

      // Draft Pick
      case 5:
        if (correctPlayer.pick == cellInfo) {
          cellID += "c";
        } else if (cellInfo != 0) {
          const diff = correctPlayer.pick - cellInfo;
          if (diff <= 20 && diff >= -20) {
            cellID += "a";
          }
          if (diff < 0) {
            cellID += "ph";
          } else {
            cellID += "pl";
          }
        }

        break;
    }
  }

  if (cellID.includes("ph")) {
    return (
      <div className="cell" id={cellID}>
        <div>
          <p className="textInfo">{cellInfo} </p>
          <KeyboardArrowDownIcon className="textInfo" />
        </div>
      </div>
    );
  } else if (cellID.includes("pl")) {
    return (
      <div className="cell" id={cellID}>
        <div>
          <p className="textInfo" id="text">
            {cellInfo}{" "}
          </p>
          <KeyboardArrowUpIcon className="textInfo" id="icon" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cell" id={cellID}>
        {cellInfo}
      </div>
    );
  }
}

export default Cell;
