import React from "react";
import { Modal, Table } from "react-bootstrap";

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.toggleInstructions = this.toggleInstructions.bind(this);
  }

  toggleInstructions() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  render() {
    return (
      <>
        <button id="instruction-button" onClick={this.toggleInstructions}>
          i
        </button>

        <Modal
          centered
          show={this.state.showModal}
          onHide={this.toggleInstructions}
          dialogClassName="instruction-modal"
        >
          <div>
            <h1>Riding simulation requires use of device microphone</h1>
          </div>
          <div className="table-shell">
            <Table responsive>
              <thead>
                <tr>
                  <th>Buttons</th>
                  <th>Instructions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Go</td>
                  <td>
                    Hold down and repeatedly state one syllable word until
                    collected examples reaches around 800
                  </td>
                </tr>
                <tr>
                  <td>Stop</td>
                  <td>
                    Hold down and repeatedly state one syllable word until
                    collected examples reaches around 800
                  </td>
                </tr>
                <tr>
                  <td>Left</td>
                  <td>
                    Hold down and repeatedly state one syllable word until
                    collected examples reaches around 800
                  </td>
                </tr>
                <tr>
                  <td>Right</td>
                  <td>
                    Hold down and repeatedly state one syllable word until
                    collected examples reaches around 800
                  </td>
                </tr>
                <tr>
                  <td>Noise</td>
                  <td>
                    Hold down to collect background noise until examples reaches
                    around 800
                  </td>
                </tr>
                <tr>
                  <td>Train</td>
                  <td>
                    Click to auto-train your player. Training is complete when
                    Epoch reaches 130
                  </td>
                </tr>
                <tr>
                  <td>Test</td>
                  <td>
                    Clickable when training is complete. Observe sliders to test
                    responsiveness to spoken commands
                  </td>
                </tr>
                <tr>
                  <td>Ride</td>
                  <td>Begin game</td>
                </tr>
                <tr>
                  <td>Listen</td>
                  <td>Begin listening for commands</td>
                </tr>
                <tr>
                  <td>Screen click</td>
                  <td>Allows use of panning camera (cursor lock)</td>
                </tr>
                <tr>
                  <td>ESC Key</td>
                  <td>Camera Lock (show cursor)</td>
                </tr>
              </tbody>
            </Table>
            <p>
              Please Note: Game rendering is based on device GPU. Best
              performance of game will be dependent on device ability to render
              WebGL graphics.
            </p>
          </div>
          <button onClick={this.toggleInstructions}>Close Instructions</button>
        </Modal>
      </>
    );
  }
}

export default Instructions;
