import '../styles/score.css';

function Score({ score, bestScore }) {
    return (
        <div className='header'>
            <div id='title'>
                <h1>Crypto Memory Game</h1>
            </div>
            <div id='currentScore'>
                <h1>Score: {score}</h1>
            </div>
            <div id='instructions'>
                Instructions: Get points by clicking on a crypto but don't click on any more than once!
            </div>
            <div id='bestScore'>Best Score: {bestScore}</div>
        </div>
    );
}

export default Score;
