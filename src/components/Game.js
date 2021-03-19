import { useState } from 'react';

import { calculateWinner, getMoveCoordinates } from '../helpers';
import Board from './Board';
import Move from './Move';

const Game = () => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
        moveIndex: 0,
        clickedCords: null
    }]);
    const [winningCombination, setWinningCombination] = useState([]);
    const [movesOrder, setMovesOrder] = useState('asc');
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const current = history[stepNumber];
    // Checking for winner after each render
    const winner = calculateWinner(current.squares);

    // Controling the time travel
    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    };

    // Render methods

    // Showing which player goes next or the winner of the game
    const renderStatus = () => {
        if (winner) {
            if (winningCombination.length === 0)
                setWinningCombination(winner.indexes)

            return `
                Winner: ${winner.sign}
                Combination: ${winner.indexes}
            `;
        } else if (!current.squares.some(square => square === null)) {
            return `Game is a draw!`;
        } else {
            if (winningCombination.length)
                setWinningCombination([])

            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
    };

    // Move number buttons for time travel
    const renderMoves = () => {
        const ordered = movesOrder === 'asc' ? history : [...history].reverse();

        return (
            ordered.map(item =>
                <Move
                    isActive={item.moveIndex === stepNumber}
                    key={item.moveIndex}
                    move={item.moveIndex}
                    cords={item.clickedCords}
                    onClick={jumpTo}
                />
            )
        );
    }

    // Event handlers
    const handleSquareClick = i => {
        const historyCopy = history.slice(0, stepNumber + 1);
        const squaresCopy = [...current.squares];

        if (calculateWinner(squaresCopy) || squaresCopy[i])
            return;

        squaresCopy[i] = xIsNext ? 'X' : 'O';

        setHistory([
            ...historyCopy,
            {
                squares: squaresCopy,
                clickedCords: getMoveCoordinates(i),
                moveIndex: historyCopy.length
            }
        ]);
        setStepNumber(historyCopy.length);
        setXIsNext(!xIsNext);
        setGameOver(calculateWinner(squaresCopy) ? true : false);
    };

    const handleMovesOrderClick = () => {
        setMovesOrder(movesOrder === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    winningCombination={winningCombination}
                    gameOver={gameOver}
                    onClick={(i) => handleSquareClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{renderStatus()}</div>
                <ol>{renderMoves()}</ol>
                <button onClick={handleMovesOrderClick}>
                    Set moves order to {movesOrder === 'asc' ? 'DESC' : 'ASC'}
                </button>
            </div>
        </div>
    );
};


export default Game;
