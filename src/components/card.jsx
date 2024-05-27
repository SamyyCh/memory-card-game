import { useState } from 'react'
import '../styles/card.css'

function Cards() {
    const [card, setCard] = useState();

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    return (
        <>
        <div className='allCards'>
            <div id='card'>
                <div id='bitcoin'></div>
                    Bitcoin
            </div>
            <div id='card'>
                <div id='ethereum'></div>
                    Ethereum
            </div>
            <div id='card'>
                <div id='tether'></div>
                    Tether
            </div>
            <div id='card'>
                <div id='solana'></div>
                    Solana
            </div>
            <div id='card'>
                <div id='doge'></div>
                    Dogecoin
            </div>
            <div id='card'>
                <div id='avax'></div>
                    Avalanche
            </div>
            <div id='card'>
                <div id='link'></div>
                    Chainlink
            </div>
            <div id='card'>
                <div id='polygon'></div>
                    Polygon
            </div>
            <div id='card'>
                <div id='usdc'></div>
                    USDC
            </div>
            <div id='card'>
                <div id='near'></div>
                    Near
            </div>
            
        </div>
        </>
    )

}

export default Cards