import State from "./State";

function Restart({actualState, onRestart}){ 
    if (actualState === State.gameActive){
        return
    }
    return <button onClick={onRestart} className="reset-game">Reset</button>
}

export default Restart;