import React from "react";
import Leaderboard from "./leaderboard";
import { startListening } from "../tenserFlow";

class ListenButton extends React.Component {
  constructor(props) {
    super(props);
    this.voiceAction = this.voiceAction.bind(this);
  }

  async voiceAction(labelTensor) {
    try {
      if (labelTensor.data) {
        const command = (await labelTensor.data())[0];
        this.props.changeVoiceCommandAction(command);
      }
    } catch (err) {
      console.log(err);
    }
  }

  handleClick() {
    startListening(this.voiceAction);
    const button = document.getElementById("listenButton");
    button.remove();
  }

  render() {
    return (
      <div id="game-listen-button">
        <button
          id="listenButton"
          className="all-buttons"
          onClick={() => this.handleClick()}
        >
          Start Listening
        </button>
      </div>
    );
  }
}

export default ListenButton;
