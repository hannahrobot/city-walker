import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import goth from "../models/people/goth.glb";
import { useBox } from "@react-three/cannon";

const CarThree = (props) => {
  const gltfjuliette = useLoader(GLTFLoader, goth);

  const [julietteRef, apijuliette] = useBox(() => ({
    mass: 1,
    args: [7, 5, 7],
    position: [4, 0, -340],
    rotation: [0, (Math.PI * -25) / 180, 0],
  }));

  return (
    <>
      <mesh ref={julietteRef}>
        <primitive
          object={gltfjuliette.scene}
          scale={[0.3, 0.3, 0.3]}
          position={[0, -3, 0]}
        />
      </mesh>
    </>
  );
};

export default CarThree;
