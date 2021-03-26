import Game from './components/Game';
import HistoryContextProvider from './contexts/HistoryContext';
import WinningCombinationContextProvider from './contexts/WinningCombinationContext';
import GameOverContextProvider from './contexts/GameOverContext';

const App = () => (
    <HistoryContextProvider>
        <GameOverContextProvider>
            <WinningCombinationContextProvider>
                <Game />
            </WinningCombinationContextProvider>
        </GameOverContextProvider>
    </HistoryContextProvider>
);

export default App;
