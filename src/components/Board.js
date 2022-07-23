import React, { useEffect, useState } from "react";
import { boardDefault } from '../Entry';
import Cell from "./Cell";

function Board () {
    return (
        <div className = "board">
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={0}/>
                <Cell infoIdentifier={1} attemptVal={0}/>
                <Cell infoIdentifier={2} attemptVal={0}/>
                <Cell infoIdentifier={3} attemptVal={0}/>
                <Cell infoIdentifier={4} attemptVal={0}/>
                <Cell infoIdentifier={5} attemptVal={0}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={1}/>
                <Cell infoIdentifier={1} attemptVal={1}/>
                <Cell infoIdentifier={2} attemptVal={1}/>
                <Cell infoIdentifier={3} attemptVal={1}/>
                <Cell infoIdentifier={4} attemptVal={1}/>
                <Cell infoIdentifier={5} attemptVal={1}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={2}/>
                <Cell infoIdentifier={1} attemptVal={2}/>
                <Cell infoIdentifier={2} attemptVal={2}/>
                <Cell infoIdentifier={3} attemptVal={2}/>
                <Cell infoIdentifier={4} attemptVal={2}/>
                <Cell infoIdentifier={5} attemptVal={2}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={3}/>
                <Cell infoIdentifier={1} attemptVal={3}/>
                <Cell infoIdentifier={2} attemptVal={3}/>
                <Cell infoIdentifier={3} attemptVal={3}/>
                <Cell infoIdentifier={4} attemptVal={3}/>
                <Cell infoIdentifier={5} attemptVal={3}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={4}/>
                <Cell infoIdentifier={1} attemptVal={4}/>
                <Cell infoIdentifier={2} attemptVal={4}/>
                <Cell infoIdentifier={3} attemptVal={4}/>
                <Cell infoIdentifier={4} attemptVal={4}/>
                <Cell infoIdentifier={5} attemptVal={4}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={5}/>
                <Cell infoIdentifier={1} attemptVal={5}/>
                <Cell infoIdentifier={2} attemptVal={5}/>
                <Cell infoIdentifier={3} attemptVal={5}/>
                <Cell infoIdentifier={4} attemptVal={5}/>
                <Cell infoIdentifier={5} attemptVal={5}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={6}/>
                <Cell infoIdentifier={1} attemptVal={6}/>
                <Cell infoIdentifier={2} attemptVal={6}/>
                <Cell infoIdentifier={3} attemptVal={6}/>
                <Cell infoIdentifier={4} attemptVal={6}/>
                <Cell infoIdentifier={5} attemptVal={6}/>
            </div>
            <div className = "row">
                <Cell infoIdentifier={0} attemptVal={7}/>
                <Cell infoIdentifier={1} attemptVal={7}/>
                <Cell infoIdentifier={2} attemptVal={7}/>
                <Cell infoIdentifier={3} attemptVal={7}/>
                <Cell infoIdentifier={4} attemptVal={7}/>
                <Cell infoIdentifier={5} attemptVal={7}/>
            </div>
        </div>
    );
}

export default Board