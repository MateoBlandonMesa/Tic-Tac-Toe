function Square({className, value, onClick}) {
  return <div  onClick={onClick} className={`Square ${className}`}>{value}</div> 

  }

export default Square;
