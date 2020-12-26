import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import brad from "../models/people/brad.glb";
// import red from "../models/people/red.glb";
// import popstar from "../models/people/popstar.glb";
import maria from "../models/people/maria.glb";
import { useBox } from "@react-three/cannon";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const CarOne = (props) => {
  // const { scene: gltf } = useLoader(GLTFLoader, brad);
  // const { scene: gltfRed } = useLoader(GLTFLoader, red);
  // const { scene: gltfPopstar } = useLoader(GLTFLoader, popstar);
  const { scene: gltfMaria } = useLoader(GLTFLoader, maria);

  // const [bradRef, api] = useBox(() => ({
  //   mass: 2,
  //   args: [5, 5, 5],
  //   position: [0, 0, 180],
  //   rotation: [0, (Math.PI * 90) / 180, 0],
  // }));
  const [redRef, apiRed] = useBox(() => ({
    mass: 1,
    args: [6, 5, 6],
    position: [-4, 10, 140],
  }));
  // const [popstarRef, apiPopstar] = useBox(() => ({
  //   mass: 1,
  //   args: [6, 5, 6],
  //   position: [6, 10, 135],
  //   rotation: [0, (Math.PI * 280) / 180, 0],
  // }));
  // const [mariaRef, apiMaria] = useBox(() => ({
  //   mass: 1,
  //   args: [6, 5, 6],
  //   position: [3, 10, 120],
  //   rotation: [0, (Math.PI * -25) / 180, 0],
  // }));

  return (
    <>
      {/* <mesh ref={mariaRef}>
        <primitive object={gltfMaria} scale={[9, 9, 9]} />
      </mesh>
      <mesh ref={popstarRef}>
        <primitive object={gltfMaria.clone(true)} scale={[9, 9, 9]} />
      </mesh> */}
      <mesh ref={redRef}>
        <primitive object={gltfMaria} scale={[9, 9, 9]} />
      </mesh>
    </>
  );
};

export default CarOne;
