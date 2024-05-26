import { useState } from 'react'
import '../styles/card.css'

function Cards() {
    const [card, setCard] = useState();

    return (
        <>
        <div className='allCards'>
            <div id='card'>
                <div id='bitcoin'>
                    bitcoin
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    ethereum
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    solana
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    dogwifhat
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    avalanche
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    doge
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    polygon
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    near
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    nubcat
                </div>
            </div>
            <div id='card'>
                <div id='coin'>
                    paal
                </div>
            </div>
        </div>
        </>
    )

}

export default Cards