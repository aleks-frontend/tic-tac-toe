import { createContext, useState } from 'react';

export const HistoryContext = createContext();

const HistoryContextProvider = (props) => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
        moveIndex: 0,
        clickedCords: null
    }]);
    
    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {props.children}
        </HistoryContext.Provider>
    );
};

export default HistoryContextProvider;
