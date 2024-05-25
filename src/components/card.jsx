import { useState } from 'react'
import '../styles/card.css'

function Cards() {
    const [card, setCard] = useState();

    return (
        <>
        <div className='allCards'>
            <div id='card'>
                bitcoin
            </div>
            <div id='card'>
                ethereum
            </div>
            <div id='card'>
                solana
            </div>
            <div id='card'>
                dogwifhat
            </div>
            <div id='card'>
                avalanche
            </div>
            <div id='card'>
                doge
            </div>
            <div id='card'>
                polygon
            </div>
            <div id='card'>
                near
            </div>
            <div id='card'>
                nub
            </div>
            <div id='card'>
                paal
            </div>
        </div>
        </>
    )

}

export default Cards