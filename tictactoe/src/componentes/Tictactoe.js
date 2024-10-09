 import { useState, useEffect} from "react";
import Board from "./Board";
import GameFinal from "./GameFinal";
import State from "./State";
import Restart from "./Restart";

//CONSTANTES  

const PLAYER1 = <div className="Player1">X</div>; 
const PLAYER2 = <div className="Player2">O</div>; 
const allWinningCombs = [
    //Filas 
    {combo:[0,1,2], strikeType :"strike-row-1"},
    {combo:[3,4,5], strikeType :"strike-row-2"},
    {combo:[6,7,8], strikeType :"strike-row-3"},

    //Columnas 
    {combo:[0,3,6], strikeType :"strike-column-1"},
    {combo:[1,4,7], strikeType :"strike-column-2"},
    {combo:[2,5,8], strikeType :"strike-column-3"},    

    //Diagonales 
    {combo:[0,4,8], strikeType :"strike-diagonal-1"},
    {combo:[2,4,6], strikeType :"strike-diagonal-2"},
    ];

//FUNCIONES 

function checkWinner(squares, setStrikeType,setState){ 
    for (const winningComb of allWinningCombs){
        const {combo, strikeType} = winningComb; 
        const squareValue1 = squares[combo[0]]
        const squareValue2 = squares[combo[1]]
        const squareValue3 = squares[combo[2]]
        
        if(squareValue1 !== null && squareValue1 === squareValue2 && squareValue1 === squareValue3) {
            setStrikeType(strikeType);
            if(squareValue1 === PLAYER1){
                setState(State.player1wins)
            }else{
                setState(State.player2wins)
            }
            return;
        }
    }

    const areAllSquaresUsed = squares.every((square)=> square != null); 

    if (areAllSquaresUsed){ 
        setState(State.draw);
    }
}


function Tictactoe() {
    const [squares, setSquares] = useState(Array(9).fill(null)); 
    const [playerTurn, setPlayerTurn] = useState(PLAYER1);
    const [strikeType, setStrikeType] = useState();
    const [actualState, setState] = useState(State.gameActive); 

    const squareClick = (index)=>{ 
        if(actualState !== State.gameActive){ 
            return;
        }

        if(squares[index] !== null){ 
            return;
        }

        const newSquares = [...squares]; 
        newSquares[index] = playerTurn;  
        setSquares(newSquares);   

        if (playerTurn === PLAYER1){
            setPlayerTurn(PLAYER2)
        }
        else{ 
            setPlayerTurn(PLAYER1)
        }
    }

    const restartClick = () =>{ 
        setState(State.gameActive);
        setSquares(Array(9).fill(null)); 
        setPlayerTurn(PLAYER1)
        setStrikeType(null);
    }

    useEffect(()=>{
        checkWinner(squares, setStrikeType, setState); 
    },[squares])

  return (
    <div>
      <h1>TicTacToe</h1> 
      <Board squares = {squares} onSquareClick = {squareClick} strikeType = {strikeType} /> 
      <GameFinal actualState = {actualState}/>
      <Restart actualState = {actualState} onRestart = {restartClick}/>
    </div>
  ); 
}

export default Tictactoe;
