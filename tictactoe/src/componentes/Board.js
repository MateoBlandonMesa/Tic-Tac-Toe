import Square from "./Square";
import Strike from "./Strike";
function Board({squares, onSquareClick, strikeType}) { // Aca instanciamos la propiedad
  return (
    <div className="Board">
      <Square onClick={()=> onSquareClick(0)} value ={squares[0]} className="top-border left-border right-border bottom-border"/>
      <Square onClick={()=> onSquareClick(1)} value ={squares[1]} className="right-border bottom-border top-border"/>
      <Square onClick={()=> onSquareClick(2)} value ={squares[2]} className="right-border bottom-border top-border"/>
      <Square onClick={()=> onSquareClick(3)} value ={squares[3]} className="right-border bottom-border left-border"/>
      <Square onClick={()=> onSquareClick(4)} value ={squares[4]} className="right-border bottom-border"/>
      <Square onClick={()=> onSquareClick(5)} value ={squares[5]} className="right-border bottom-border"/>
      <Square onClick={()=> onSquareClick(6)} value ={squares[6]} className="left-border bottom-border right-border"/>
      <Square onClick={()=> onSquareClick(7)} value ={squares[7]} className="right-border bottom-border"/>
      <Square onClick={()=> onSquareClick(8)} value ={squares[8]} className="right-border bottom-border"/>
      <Strike strikeType = {strikeType}/>
    </div>
  ); // Esta zona de squares se puede hacer de otra manera para que no sea tan repetitivo el codigo (?)
}

export default Board;
