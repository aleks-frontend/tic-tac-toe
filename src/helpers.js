export const calculateWinner = squares => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let winner = null;

    winningCombinations.forEach(combination => {
        const [a, b, c] = combination;

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winner = {
                sign: squares[a],
                indexes: combination
            };
        }
    })

    return winner;
};

export const getMoveCoordinates = (index) => {
    const result = {};

    // Setting up the X coordinate
    if (index === 0 || (index % 3 === 0)) {
        result.x = 1;
    } else if (index === 1 || ((index - 1) % 3 === 0)) {
        result.x = 2;
    } else if ((index + 1) % 3 === 0) {
        result.x = 3;
    }

    // setting up the Yß coordinate
    if (index < 3) {
        result.y = 1;
    } else if (index < 6) {
        result.y = 2;
    } else {
        result.y = 3;
    }

    return result;
};
