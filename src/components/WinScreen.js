import React from 'react';
import { connect } from 'react-redux';
import { addRecordToDb } from '../store/leaderboard';
import {
  getGameState,
  resetGameState,
  gameStatePlaying,
  gameStateWin,
} from '../store/gameState';
import Leaderboard from './leaderboard';

class WinScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showModal: false,
      submitted: false,
    };
    this.submitScore = this.submitScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.toggleLeaderboard = this.toggleLeaderboard.bind(this);
    this.hoverSound = this.hoverSound.bind(this);
    this.selectSound = this.selectSound.bind(this);
  }
  toggleSfx = new Audio('./sfx/toggle.mp3');
  selectSfx = new Audio('./sfx/select.mp3');

  hoverSound() {
    this.toggleSfx.volume = 0.5;
    this.toggleSfx.play();
  }

  selectSound() {
    this.selectSfx.volume = 0.5;
    this.selectSfx.play();
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  submitScore(e) {
    e.preventDefault();
    this.selectSound();
    this.props.addToLeaderboard({
      name: this.state.name,
      score: this.props.time,
    });
    this.setState({
      submitted: true,
    });
  }

  resetGame() {
    this.selectSound();
    this.props.resetGame();
  }

  toggleLeaderboard() {
    this.selectSound();
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    let elapsedTime = this.props.time;
    let minutes, seconds, milliseconds;
    minutes = Math.floor(elapsedTime / 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }); //00 always two digits
    seconds = Math.floor(elapsedTime - minutes * 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }); //00 always two digits
    milliseconds = Math.floor((elapsedTime % 1) * 100).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }); //always two digits
    //add penalty to elapsedTime
    //update state's elapsedTime for leaderboar
    elapsedTime = `${minutes}:${seconds}:${milliseconds}`;

    return (
      <div className="home">
        <div className="title">
          <h1>Course Complete</h1>
        </div>
        <div className="message">
          <h2>
            Your time is <strong>{elapsedTime}</strong>
          </h2>
          {!this.state.submitted && <p>Add to leaderboard?</p>}
          {!this.state.submitted ? (
            <form id="score-submission" onSubmit={(e) => this.submitScore(e)}>
              <label htmlFor="name">Name</label>
              <div id="score-input">
                <input
                  required
                  name="name"
                  placeholder="ABC"
                  type="text"
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                />
                <button onMouseOver={this.hoverSound} type="submit">Submit</button>
              </div>
            </form>
          ) : (
            <div>
              <h2>
                <strong>Score Submitted</strong>
              </h2>
            </div>
          )}
        </div>
        <div id="button-row">
          <button
            id="leaderboard-button"
            onMouseOver={this.hoverSound}
            onClick={this.toggleLeaderboard}
          >
            Leaderboard
          </button>
          {this.state.showModal && (
            <Leaderboard
              showModal={this.state.showModal}
              toggleLeaderboard={this.toggleLeaderboard}
            />
          )}
          <button
            id="playButton"
            onMouseOver={this.hoverSound}
            onClick={this.resetGame}
          >
            Play again?
          </button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  time: state.time,
  leaderboard: state.leaderboard,
  gameState: state.gameState,
});

const mapDispatch = (dispatch) => ({
  addToLeaderboard: (score) => dispatch(addRecordToDb(score)),
  resetGame: () => dispatch(resetGameState()),
});

export default connect(mapState, mapDispatch)(WinScreen);
