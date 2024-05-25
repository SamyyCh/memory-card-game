import { useState } from 'react'
import '../styles/score.css'

function Score() {
    const [score, setScore] = useState("");

    return (
        <div className='header'>
            <div id='title'>
                <h1>Crypto Memory Game</h1>
            </div>
            <div id='currentScore'>
                <h1>Score : {score}</h1>
            </div>
            <div id='instrutions'>Instructions : Get points by clicking on a crypto 
            but don't click on any more than once!
            </div>
            <div id='bestScore'>Best Score : 10</div>
        </div>
    )
}

export default Score