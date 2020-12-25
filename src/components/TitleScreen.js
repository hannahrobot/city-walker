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
        <button
          id="left"
          onMouseDown={() => this.props.collect(0)}
          onMouseUp={() => this.props.collect(null)}
        >
          Left
        </button>
        <button
          id="right"
          onMouseDown={() => this.props.collect(1)}
          onMouseUp={() => this.props.collect(null)}
        >
          Right
        </button>
        {/* <button
          id="stop"
          onMouseDown={() => this.props.collect(2)}
          onMouseUp={() => this.props.collect(null)}
        >
          Stop
        </button>
        <button
          id="go"
          onMouseDown={() => this.props.collect(3)}
          onMouseUp={() => this.props.collect(null)}
        >
          Go
        </button> */}
        <button
          id="noise"
          onMouseDown={() => this.props.collect(2)}
          onMouseUp={() => this.props.collect(null)}
        >
          Noise
        </button>
        <button id="train" onClick={() => this.props.train()}>
          Train
        </button>
        <button id="listen" onClick={() => this.props.listen()}>
          Listen
        </button>
        <input type="range" id="output" min={0} max={10} step={0.1}></input>
        <div id="console"></div>
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
