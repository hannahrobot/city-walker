import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { loadModel, startListening, stopListening } from "../tenserFlow";
import { Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Girl from "./Girl";
import CarOne from "./CarOne";
import SailorMoon from "./SailorMoon";
import CarThree from "./CarThree";
import PokerTable from "./PokerTable";
import Box from "./Box";
import Train from "./Train";
import FloorPlane from "./FloorPlane";
import SidePlane from "./SidePlane";
import FrontPlane from "./FrontPlane";
import EndZone from "./EndZone";
import store from "../store";
import RestartButton from "../components/RestartButton";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      endPosition: {},
    };
    this.voiceAction = this.voiceAction.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  componentDidMount() {
    loadModel().then(() => startListening(this.voiceAction));
  }

  voiceAction(command) {
    this.setState({
      action: command,
    });
    console.log("voice command:", this.state.action);
  }
  // function to pass EndZone Position
  // up to parent as props
  updatePosition(endPosition) {
    this.setState({
      endPosition: endPosition,
    });
  }

  render() {
    return (
      <>
        <RestartButton />
        <Canvas colorManagement shadowMap>
          <Stars radius={100} depth={800} count={50000} />
          <hemisphereLight intensity={0.5} />
          <ambientLight intensity={0.2} />
          <spotLight
            castShadow
            penumbra={1}
            intensity={2}
            position={[150, 300, -150]}
            lookAt={[0, 0, 300]}
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            shadow-camera-near={0.1}
            shadow-camera-far={500}
          />
          <Physics gravity={[0, -100, 0]}>
            <FloorPlane
              rotation={[-(Math.PI / 2), 0, 0]}
              position={[0, 1, 0]}
            />
            <EndZone store={store} />
            <Suspense fallback={<Box />}>
              <Girl
                action={this.state.action}
                girlPosition={[0, 0, 200]}
                stopListening={stopListening}
                changeWin={this.props.changeWin}
                setAction={this.voiceAction}
                changePlaying={this.props.changePlaying}
                store={store}
              />
              <CarOne />
              <CarThree />
              <SailorMoon />
              <PokerTable />
            </Suspense>
            <Train rotation={[0, 0, 0]} position={[0, 0, 140]} />
            <FrontPlane position={[0, 0, -800]} />
            <SidePlane
              rotation={[0, -Math.PI / 2, 0]}
              position={[15, 0, -200]}
            />
            <SidePlane
              rotation={[0, Math.PI / 2, 0]}
              position={[-15, 0, -200]}
            />
          </Physics>
        </Canvas>
      </>
    );
  }
}

export default Game;
