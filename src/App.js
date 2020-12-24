import React from "react";
import Game from "./ThreeJs/Game";
import { loadModel, buildModel, collect } from "./tenserFlow";
import Title from "./components/TitleScreen";
import "firebase/firestore";
import { connect } from "react-redux";
import {
  getGameState,
  gameStatePlaying,
  gameStateWin,
} from "./store/gameState";
import WinScreen from "./components/WinScreen";
import Stopwatch from "./ThreeJs/Stopwatch";
import AudioPlayer from "./components/AudioPlayer";
import Github from "./components/Github";
import Instructions from "./components/Instructions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      granted: "",
    };
    this.changePlaying = this.changePlaying.bind(this);
    this.changeWin = this.changeWin.bind(this);
  }

  componentDidMount() {
    loadModel().then(() => buildModel());
  }

  changePlaying() {
    const gameState = this.props.gameState;
    this.props.gameStatePlaying(!gameState.isPlaying);
  }

  changeWin() {
    const gameState = this.props.gameState;
    this.props.gameStateWin(!gameState.hasWon);
  }

  askPermission() {
    return navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        this.getPermission().then((permis) => {
          this.setState({
            granted: permis.state,
          });
        });
      })
      .catch(() => {
        this.getPermission().then((permis) => {
          this.setState({
            granted: permis.state,
          });
        });
      });
  }

  async getPermission() {
    const permissionStatus = await navigator.permissions.query({
      name: "microphone",
    });
    return permissionStatus;
  }

  renderSwitch(permiss) {
    if (this.props.gameState.hasWon && !this.props.gameState.isPlaying) {
      return (
        <WinScreen
          changeWin={this.changeWin}
          changePlaying={this.changePlaying}
        />
      );
    } else {
      return this.props.gameState.isPlaying ? (
        <Game changeWin={this.changeWin} changePlaying={this.changePlaying} />
      ) : (
        <Title changePlaying={this.changePlaying} collect={collect} />
      );
      // }
    }
  }

  render() {
    return (
      <>
        <Instructions />
        <AudioPlayer />
        {this.renderSwitch(this.state.granted)}
        {this.props.gameState.isPlaying ? <Stopwatch /> : <Github />}
      </>
    );
  }
}

const mapState = (state) => ({
  gameState: state.gameState,
});

const mapDispatch = (dispatch) => ({
  getGameState: () => dispatch(getGameState()),
  gameStateWin: (hasWon) => dispatch(gameStateWin(hasWon)),
  gameStatePlaying: (isPlaying) => dispatch(gameStatePlaying(isPlaying)),
});

export default connect(mapState, mapDispatch)(App);
