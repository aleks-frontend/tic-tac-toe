const Move = ({ move = 0, cords, isActive, onClick }) => {
    const description = `Go to ${move ? `move #${move}` : 'game start'}`;

    return (
        <li>
            <button 
                onClick={() => onClick(move)}
                style={{ fontWeight: `${isActive ? '800' : '400'}` }}
            >
                {description} 
                {cords && ` (col: ${cords.x} row: ${cords.y})`}
            </button>
        </li>
    )
};

export default Move;
