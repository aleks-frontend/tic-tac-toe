import { useContext } from "react";
import { GameOverContext } from "../contexts/GameOverContext";
import { WinningCombinationContext } from "../contexts/WinningCombinationContext";

const Square = ({ onClick, value, index }) => {
    const { gameOver } = useContext(GameOverContext);
    const { winningCombination } = useContext(WinningCombinationContext);
    const highlight = winningCombination.includes(index) && gameOver;
    
    return (
        <button
            style={{
                cursor: gameOver ? 'auto' : 'pointer',
                color: highlight ? 'red' : 'black'
            }}
            className="square"
            onClick={onClick}>
            {value}
        </button>
    )
};

export default Square;
