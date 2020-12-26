import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sailormoon from "../models/sailormoon_test/scene.glb";
import { useBox } from "@react-three/cannon";

const SailorMoon = (props) => {
  const gltf = useLoader(GLTFLoader, sailormoon);

  const [charRef, api] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [-8, 2, -50],
  }));

  const [charTwoRef, apiTwo] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [0, 2, -30],
    rotation: [0, (Math.PI * -65) / 180, 0],
  }));

  const [charNineRef, apiNine] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [8, 2, -50],
    rotation: [0, (Math.PI * -80) / 180, 0],
  }));

  const [charTenRef, apiTen] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [10, 2, -35],
    rotation: [0, (Math.PI * -80) / 180, 0],
  }));

  const [charElevenRef, apiEleven] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [0, 2, -45],
    rotation: [0, (Math.PI * -80) / 180, 0],
  }));

  return (
    <>
      <mesh ref={charRef}>
        <primitive object={gltf.scene} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charTwoRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charNineRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charTenRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charElevenRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
    </>
  );
};

export default SailorMoon;
