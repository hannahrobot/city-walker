import React from "react";
import Leaderboard from "./leaderboard";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.hoverSound = this.hoverSound.bind(this);
    this.selectSound = this.selectSound.bind(this);
    this.toggleLeaderboard = this.toggleLeaderboard.bind(this);
  }
  toggleSfx = new Audio("./sfx/toggle.mp3");
  selectSfx = new Audio("./sfx/select.mp3");

  hoverSound() {
    this.toggleSfx.volume = 0.5;
    this.toggleSfx.play();
  }

  selectSound() {
    this.selectSfx.volume = 0.5;
    this.selectSfx.play();
  }

  toggleLeaderboard() {
    this.selectSound();
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Midnight Train</h1>
        </div>
        <div className="message">
          <h2>A voice-command driven 3D interactive simulation</h2>
          <p>Please ride responsibly.</p>
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
            onMouseOver={() => this.hoverSound()}
            onClick={() => (this.props.changePlaying(), this.selectSound())}
          >
            Ride
          </button>
        </div>
        <div className="definition">
          <p>
            Midnight Train
            <br />
            <span id="defnoun">A train</span> : With no where to go and to go no
            where.
          </p>
        </div>
      </div>
    );
  }
}

export default Title;
