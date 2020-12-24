import React from 'react';
import { restartGameState } from '../store/gameState';
import { connect } from 'react-redux'

class RestartButton extends React.Component{
  constructor() {
    super()
    this.resetGame = this.resetGame.bind(this)
  }

  resetGame() {
    this.props.restartGameState()
  }

  render() {
    return (
      <button id="restart-button" onClick={this.resetGame}>RESTART</button>
    )
  }
}

const mapDispatch = (dispatch) => ({
  restartGameState: () => dispatch(restartGameState())
})

export default connect(null, mapDispatch)(RestartButton)
