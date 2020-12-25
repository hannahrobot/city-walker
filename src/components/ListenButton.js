import React from "react";
import Leaderboard from "./leaderboard";

class ListenButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          id="listenButton"
          onClick={() => this.props.beginGameListening()}
        >
          Start Listening
        </button>
      </div>
    );
  }
}

export default ListenButton;
