function Square({className, value, onClick}) {
  return <div  onClick={onClick} className={`Square ${className}`}>{value}</div> // Aca usamos el ${className} para 

}

export default Square;
