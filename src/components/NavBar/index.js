// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, gameInProgress} = props

  return (
    <nav className="nav-bar-card">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      {gameInProgress ? (
        <div className="score-card">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
