import Square from './Square';

const Board = ({ squares, gameOver, onClick, winningCombination }) => {
    let squareIndex = 0;

    const renderSquare = i => (
        <Square
            key={i}
            value={squares[i]}
            gameOver={gameOver}
            highlight={winningCombination.includes(i) && gameOver}
            onClick={() => onClick(i)}
        />
    );

    const renderColumns = (columnsCount = 3) => (
        [...new Array(columnsCount)].reduce(acum => [...acum, renderSquare(squareIndex++)], [])
    );

    const renderRows = (rowsCount = 3) => (
        [...new Array(rowsCount)].reduce((acum, _value, index) => {
            return [
                ...acum,
                <div className="board-row" key={index}>
                    {renderColumns(3)}
                </div>
            ]
        }, [])
    );

    return (
        <div>
            {renderRows()}
        </div>
    );
}

export default Board;
