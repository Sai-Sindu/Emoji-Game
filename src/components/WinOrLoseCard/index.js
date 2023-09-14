// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayAgain} = props

  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreNumber = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-or-loss-container">
      <div className="text-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-text">{scoreNumber}</p>
        <p className="score-number">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
