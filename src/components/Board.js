import Square from './Square';

const Board = ({ squares, onClick }) => {
    let squareIndex = 0;

    const renderSquare = i => (
        <Square
            key={i}
            index={i}
            value={squares[i]}
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
