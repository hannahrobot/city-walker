import React from "react";
import { useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";
import girl from "../models/girl/scene.glb";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import Viewport from "./Viewport";
import { connect } from "react-redux";

let acc = 0;
let baseVel = 0;
let xVel = 0;

const Girl = (props) => {
  //girlRef: girl's property in scene (read only)
  //api: girl's physics object (methods to set/subscribe)
  const gltf = useLoader(GLTFLoader, girl);

  const [girlRef, api] = useBox(() => ({
    mass: 6,
    args: [6, 6, 6],
    position: props.girlPosition,
  }));

  let girlPosition;
  if (girlRef.current) {
    girlPosition = girlRef.current.position;
  }
  const endZonePosition = props.position;

  useFrame(() => {
    if (
      girlPosition.x >= endZonePosition.x - 10 &&
      girlPosition.x <= endZonePosition.x + 10 &&
      girlPosition.z >= endZonePosition.z - 10 &&
      girlPosition.z <= endZonePosition.z + 10
    ) {
      props.stopListening();
      props.changeWin();
      props.changePlaying();
    }

    api.rotation.set(0, (Math.PI * -90) / 180, 0);
    switch (props.action) {
      case 1:
        xVel += 10;
        if (xVel >= 10) {
          props.setAction("");
        }
        break;
      case 0:
        xVel -= 10;
        if (xVel <= -10) {
          props.setAction("");
        }
        break;
      case 4:
        baseVel = 20;
        if (acc === 0) {
          acc += 5;
        }
        props.setAction("");
        break;
      case 3:
        xVel = 0;
        baseVel = 0;
        acc = 0;
        props.setAction("");
        break;
      case 2:
        props.setAction("");
        break;
      default:
        break;
    }
    api.velocity.set(xVel, -1, -(baseVel * acc));
  });
  return (
    <>
      <mesh ref={girlRef} frustumCulled={false}>
        <PerspectiveCamera
          fov={75}
          near={0.1}
          position={[15, 7.5, 0]}
          rotation={[0, (Math.PI * 90) / 180, 0]}
          makeDefault={true}
        />
        <primitive
          object={gltf.scene}
          scale={[5, 5, 5]}
          rotation={[0, (Math.PI * -65) / 180, 0]}
          position={[0, -7, 0]}
        />
        {/* <boxBufferGeometry attach="geometry" args={[6, 6, 6]} />
        <meshStandardMaterial wireframe={true} attach="material" /> */}
        <PointerLockControls />
      </mesh>
      <Viewport viewPosition={girlPosition} />
    </>
  );
};

const mapState = (state) => ({
  position: state.position,
});

export default connect(mapState, null)(Girl);
