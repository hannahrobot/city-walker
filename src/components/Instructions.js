import React from "react";
import { Modal, Table } from "react-bootstrap";

class Instructions extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: true,
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
            {/* <p>
              How to train commands: While holding each button down (
              <div>
                <button>Left</button>
                <button>Right</button>
                <button>Stop</button>
                <button>Go</button>
              </div>
              ) repeatedly state a one syllable word to represent the direction,
              collecting around around 800 examples for each (examples are seen
              incrementing below buttons). Additionally, press the
              <div>
                <button>Noise</button>
              </div>
              button whichout any audio imput so that it can measure your
              background noise. When you are finished collecting samples, click
              <div>
                <button>Train</button>
              </div>
              . When epoch reaches 130, click [Test] to test your voice samples.
              If the sliders move accurately, click [Ride] and begin the
              simulation.
            </p>
            <p>
              How to play: Navigate from your start position to the yellow end
              zone. Only clear, concise verbal commands will drive the car.
            </p> */}
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
