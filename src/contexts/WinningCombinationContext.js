import { createContext, useState } from 'react';

export const WinningCombinationContext = createContext();

const WinningCombinationContextProvider = (props) => {
    const [winningCombination, setWinningCombination] = useState([]);
    
    return (
        <WinningCombinationContext.Provider value={{ winningCombination, setWinningCombination }}>
            {props.children}
        </WinningCombinationContext.Provider>
    );
};

export default WinningCombinationContextProvider;
