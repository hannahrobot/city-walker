import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import sailormoon from "../models/sailormoon_test/scene.glb";
import { useBox } from "@react-three/cannon";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

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

  const [charThreeRef, apiThree] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [0, 2, -100],
    rotation: [0, (Math.PI * -45) / 180, 0],
  }));

  const [charFourRef, apiFour] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [5, 2, -120],
    rotation: [0, (Math.PI * -35) / 180, 0],
  }));

  const [charFiveRef, apiFive] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [-3, 2, -130],
    rotation: [0, (Math.PI * 35) / 180, 0],
  }));

  const [charSixRef, apiSix] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [-7, 2, -110],
    rotation: [0, (Math.PI * 50) / 180, 0],
  }));

  const [charSevenRef, apiSeven] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [0, 2, -20],
    rotation: [0, (Math.PI * 50) / 180, 0],
  }));

  const [charEightRef, apiEight] = useBox(() => ({
    mass: 2,
    args: [3, 6, 3],
    position: [0, 2, -10],
    rotation: [0, (Math.PI * 80) / 180, 0],
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
      <mesh ref={charThreeRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charFourRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charFiveRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charSixRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charSevenRef}>
        <primitive object={gltf.scene.clone(true)} scale={[7, 7, 7]} />
      </mesh>
      <mesh ref={charEightRef}>
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

// <primitive
//   object={gltf.scene.clone(true)}
//   scale={[7, 7, 7]}
//   position={[0, 0, -80]}
//   // rotation={[0, (Math.PI * -65) / 180, 0]}
// />
// <primitive
//   object={gltf.scene.clone(true)}
//   scale={[7, 7, 7]}
//   position={[10, 0, -100]}
//   rotation={[0, (Math.PI * -65) / 180, 0]}
// />
// <primitive
//   object={gltf.scene.clone(true)}
//   scale={[7, 7, 7]}
//   position={[12, 0, -60]}
//   rotation={[0, (Math.PI * -75) / 180, 0]}
// />
// <primitive
//   object={gltf.scene.clone(true)}
//   scale={[7, 7, 7]}
//   position={[3, 0, -120]}
//   rotation={[0, (Math.PI * -75) / 180, 0]}
// />
// <primitive
//   object={gltf.scene.clone(true)}
//   scale={[7, 7, 7]}
//   position={[8, 0, -110]}
//   rotation={[0, (Math.PI * -35) / 180, 0]}
// />
