import './index.css'

const NavBarItem = props => {
  const {score, timer} = props
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="game-logo"
      />
      <div className="score-timer">
        <p>
          score: <span className="orange-text">{score}</span>
        </p>
        <div className="timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-icon"
          />
          <p className="orange-text">{timer} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBarItem
