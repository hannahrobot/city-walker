import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import table from "../models/poker_table/scene.glb";
import money from "../models/money/scene.glb";
import chair from "../models/chair/scene.glb";
import person from "../models/people/spy.glb";
import { useBox } from "@react-three/cannon";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const PokerTable = (props) => {
  const gltf = useLoader(GLTFLoader, table);
  const gltfMoney = useLoader(GLTFLoader, money);
  const gltfChair = useLoader(GLTFLoader, chair);
  const gltfPerson = useLoader(GLTFLoader, person);

  const [tableRef, api] = useBox(() => ({
    mass: 3,
    args: [6, 6, 6],
    position: [-8, 2, -512],
  }));
  const [moneyRef, apiMoney] = useBox(() => ({
    type: "Kinematic",
    args: [1, 1, 1],
    position: [-4, 10, -513],
  }));
  const [chairRef, apiChair] = useBox(() => ({
    mass: 3,
    args: [6, 9, 6],
    position: [6, 2, -513],
    rotation: [0, (Math.PI * 95) / 180, 0],
  }));
  const [personRef, apiPerson] = useBox(() => ({
    mass: 3,
    args: [3, 5, 3],
    position: [8, 0, -520],
    rotation: [0, (Math.PI * -25) / 180, 0],
  }));

  return (
    <>
      <mesh ref={tableRef}>
        <primitive object={gltf.scene} scale={[0.01, 0.01, 0.01]} />
      </mesh>
      <mesh ref={moneyRef}>
        <primitive object={gltfMoney.scene} scale={[3, 3, 3]} />
      </mesh>
      <mesh ref={chairRef}>
        <primitive object={gltfChair.scene} scale={[1, 1, 1]} />
      </mesh>
      <mesh ref={personRef}>
        <primitive object={gltfPerson.scene} scale={[0.1, 0.1, 0.1]} />
      </mesh>
    </>
  );
};

export default PokerTable;
