import State from "./State"

function GameFinal ({actualState}){ 
    switch(actualState){ 
        case State.gameActive: 
            return <></>; 
        case State.player1wins: 
            return <div className="game-final">Player 1 WINS!!!</div>;
        case State.player2wins: 
            return <div className="game-final">Player 2 WINS!!!</div>;
        case State.draw: 
            return <div className="game-final">DRAW :/</div>;

        default: 
            return <></>; 

    }
}

export default GameFinal