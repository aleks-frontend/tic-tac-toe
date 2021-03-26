import { createContext, useState } from 'react';

export const GameOverContext = createContext();

const GameOverContextProvider = (props) => {
    const [gameOver, setGameOver] = useState(false);

    return (
        <GameOverContext.Provider value={{ gameOver, setGameOver }}>
            {props.children}
        </GameOverContext.Provider>
    );
};

export default GameOverContextProvider;
