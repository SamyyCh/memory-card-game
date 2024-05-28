import { useState, useEffect } from 'react';
import '../styles/card.css';

const initialCards = [
    { id: 'bitcoin', name: 'Bitcoin' },
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'tether', name: 'Tether' },
    { id: 'solana', name: 'Solana' },
    { id: 'doge', name: 'Dogecoin' },
    { id: 'avax', name: 'Avalanche' },
    { id: 'link', name: 'Chainlink' },
    { id: 'polygon', name: 'Polygon' },
    { id: 'usdc', name: 'USDC' },
    { id: 'near', name: 'Near' },
];

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(shuffle([...initialCards]));
    }, []);

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleCardClick = () => {
        setCards(shuffle([...cards]));
    };

    return (
        <>
            <div className='allCards'>
                {cards.map((card, index) => (
                    <div key={index} id='card' onClick={handleCardClick}>
                        <div id={card.id}></div>
                        {card.name}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;
