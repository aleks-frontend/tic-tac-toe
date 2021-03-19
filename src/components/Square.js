const Square = ({ gameOver ,highlight, onClick, value }) => (
    <button
        style={{ 
            cursor: gameOver ? 'auto' : 'pointer',
            color: highlight ? 'red' : 'black'
        }}
        className="square"
        onClick={onClick}>
        {value}
    </button>
);

export default Square;
