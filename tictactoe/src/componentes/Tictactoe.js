 import { useState, useEffect, StrictMode} from "react";
import Board from "./Board";
import GameFinal from "./GameFinal";
import State from "./State";
import Restart from "./Restart";

//CONSTANTES  

const PLAYER1 = "X"; 
const PLAYER2 = "O"; 
const allWinningCombs = [
    //Rows 
    {combo:[0,1,2], strikeType :"strike-row-1"},
    {combo:[3,4,5], strikeType :"strike-row-2"},
    {combo:[6,7,8], strikeType :"strike-row-3"},

    //Columns 
    {combo:[0,3,6], strikeType :"strike-column-1"},
    {combo:[1,4,7], strikeType :"strike-column-2"},
    {combo:[2,5,8], strikeType :"strike-column-3"},    

    //Diagonals 
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
        
        if(squareValue1 != null && squareValue1 == squareValue2 && squareValue1 == squareValue3) {
            setStrikeType(strikeType);
            if(squareValue1 == PLAYER1){
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
    const [squares, setSquares] = useState(Array(9).fill(null)); // El useState se importa, y sirve para añadir un estado a la variable
    const [playerTurn, setPlayerTurn] = useState(PLAYER1);
    const [strikeType, setStrikeType] = useState();
    const [actualState, setState] = useState(State.gameActive); 

    const squareClick = (index)=>{ 
        if(actualState != State.gameActive){ 
            return;
        }

        if(squares[index] != null){ 
            return;
        }

        const newSquares = [...squares]; // Crea una nueva const llamada newSquares que es una copia de la squares de arriba
        newSquares[index] = playerTurn; // El index que recibimos dando click en el cuadro lo asociamos al turno del jugador 
        setSquares(newSquares);   //Actualizamos los cuadros

        if (playerTurn == PLAYER1){
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
      <h1>Tictactoe</h1> 
      <Board squares = {squares} onSquareClick = {squareClick} strikeType = {strikeType} /> 
      <GameFinal actualState = {actualState}/>
      <Restart actualState = {actualState} onRestart = {restartClick}/>
    </div>
  ); // El Board squares no lo entiendo muy bien pero sirve a modo de instanciar la propiedad que creamos arriba con const y useState en el Board
    // Las partes que añadimos al board es como para añadir propiedades (?)
}

export default Tictactoe;
