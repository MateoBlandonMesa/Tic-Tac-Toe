import Square from "./Square";
import Strike from "./Strike";
function Board({squares, onSquareClick, strikeType}) { 
  return (
    <div className="Board">
      <Square onClick={()=> onSquareClick(0)} value ={squares[0]} className="square-design"/>
      <Square onClick={()=> onSquareClick(1)} value ={squares[1]} className="square-design"/>
      <Square onClick={()=> onSquareClick(2)} value ={squares[2]} className="square-design"/>
      <Square onClick={()=> onSquareClick(3)} value ={squares[3]} className="square-design"/>
      <Square onClick={()=> onSquareClick(4)} value ={squares[4]} className="square-design"/>
      <Square onClick={()=> onSquareClick(5)} value ={squares[5]} className="square-design"/>
      <Square onClick={()=> onSquareClick(6)} value ={squares[6]} className="square-design"/>
      <Square onClick={()=> onSquareClick(7)} value ={squares[7]} className="square-design"/>
      <Square onClick={()=> onSquareClick(8)} value ={squares[8]} className="square-design"/>
      <Strike strikeType = {strikeType}/>
    </div>
  ); 
}

export default Board;
