import './index.css'

const ScoreCard = props => {
  const {score, playAgain} = props

  const callPlayFun = () => {
    playAgain()
  }

  return (
    <div className="scorecard-bg">
      <div className="scorecard">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p>
          YOUR SCORE <br />
          <span> {score}</span>
        </p>
        <div className="btn-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <button type="button" className="play-btn" onClick={callPlayFun}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
