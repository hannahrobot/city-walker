import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import maria from "../models/people/maria.glb";
import { useBox } from "@react-three/cannon";

const CarOne = (props) => {
  const gltfMaria = useLoader(GLTFLoader, maria);

  const [mariaRef] = useBox(() => ({
    mass: 1,
    args: [6, 5, 6],
    position: [3, 10, 120],
    rotation: [0, (Math.PI * -25) / 180, 0],
  }));

  return (
    <>
      <mesh ref={mariaRef}>
        <primitive object={gltfMaria.scene} scale={[8, 8, 8]} />
      </mesh>
    </>
  );
};

export default CarOne;
