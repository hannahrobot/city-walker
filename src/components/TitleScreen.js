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
          <h2>A customized voice-command driven 3D interactive simulation</h2>
          <p>Train your player commands</p>
        </div>
        <div id="ml-button-row">
          <button
            id="left"
            className="all-buttons"
            onMouseDown={() => this.props.collect(0)}
            onMouseUp={() => this.props.collect(null)}
          >
            Left
          </button>
          <button
            id="right"
            className="all-buttons"
            onMouseDown={() => this.props.collect(1)}
            onMouseUp={() => this.props.collect(null)}
          >
            Right
          </button>
          <button
            id="stop"
            className="all-buttons"
            onMouseDown={() => this.props.collect(3)}
            onMouseUp={() => this.props.collect(null)}
          >
            Stop
          </button>
          <button
            id="go"
            className="all-buttons"
            onMouseDown={() => this.props.collect(4)}
            onMouseUp={() => this.props.collect(null)}
          >
            Go
          </button>
          <button
            id="noise"
            className="all-buttons"
            onMouseDown={() => this.props.collect(2)}
            onMouseUp={() => this.props.collect(null)}
          >
            Noise
          </button>
          <button
            id="train"
            className="all-buttons"
            onClick={() => this.props.train()}
          >
            Train
          </button>
          <button
            id="listen"
            className="all-buttons"
            onClick={() => this.props.listen()}
          >
            Test
          </button>
        </div>
        <div id="slider-row">
          <div className="slider-row-ind">
            <p>Left</p>
            <input type="range" id="output" min={0} max={10} step={0.1}></input>
            <p>Right</p>
          </div>
          <div className="slider-row-ind">
            <p>Stop</p>
            <input
              type="range"
              id="output2"
              min={0}
              max={10}
              step={0.1}
            ></input>
            <p>Go</p>
          </div>
        </div>
        <div id="console"></div>
        <div id="button-row">
          <button
            id="leaderboard-button"
            className="all-buttons"
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
            className="all-buttons"
            onMouseOver={() => this.hoverSound()}
            onClick={() => (this.props.changePlaying(), this.selectSound())}
          >
            Ride
          </button>
        </div>
      </div>
    );
  }
}

export default Title;
