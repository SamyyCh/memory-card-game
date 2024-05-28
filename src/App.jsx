import { useState } from 'react';
import Cards from './components/card';
import Score from './components/score';
import './App.css';

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const handleCardClick = (cardId) => {
        if (clickedCards.includes(cardId)) {
            setScore(0);
            setClickedCards([]);
        } else {
            const newScore = score + 1;
            setScore(newScore);
            setClickedCards([...clickedCards, cardId]);
            
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
        }
    };

    return (
        <>
            <Score score={score} bestScore={bestScore} />
            <Cards onCardClick={handleCardClick} />
        </>
    );
}

export default App;
