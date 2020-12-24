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
            <p>
              How to play: Navigate from your start position to the yellow end
              zone. Only clear, concise verbal commands will drive the car.
            </p>
            <Table responsive>
              <thead>
                <tr>
                  <th>Commands</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Go</td>
                  <td>Move foreward</td>
                </tr>
                <tr>
                  <td>Stop</td>
                  <td>Cease movement</td>
                </tr>
                <tr>
                  <td>Left</td>
                  <td>Move left</td>
                </tr>
                <tr>
                  <td>Right</td>
                  <td>Move right</td>
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
