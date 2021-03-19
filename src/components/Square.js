const Square = props => (
    <button
        style={{ 
            cursor: props.gameOver ? 'auto' : 'pointer',
            color: props.highlight ? 'red' : 'black'
        }}
        className="square"
        onClick={props.onClick}>
        {props.value}
    </button>
);

export default Square;
