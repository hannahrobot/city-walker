import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import aquarium from "../models/items/aquarium.glb";
import eaterPlant from "../models/items/eaterplant.glb";
import fan from "../models/items/fan.glb";
import medplant from "../models/items/medplant.glb";
import juliette from "../models/people/juliette.glb";
import { useBox } from "@react-three/cannon";
// import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const CarThree = (props) => {
  const { scene: gltf } = useLoader(GLTFLoader, aquarium);
  const gltfeaterPlant = useLoader(GLTFLoader, eaterPlant);
  const gltffan = useLoader(GLTFLoader, fan);
  const gltfmedplant = useLoader(GLTFLoader, medplant);
  const gltfjuliette = useLoader(GLTFLoader, juliette);

  const [aquariumRef, api] = useBox(() => ({
    mass: 1,
    args: [7, 3, 7],
    position: [-5, 0, -400],
    rotation: [0, (Math.PI * 90) / 180, 0],
  }));
  const [eaterPlantRef, apieaterPlant] = useBox(() => ({
    mass: 1,
    args: [3, 3, 3],
    position: [-4, 10, -350],
  }));
  const [fanRef, apifan] = useBox(() => ({
    mass: 1,
    args: [3, 3, 3],
    position: [6, 0, -380],
    rotation: [0, (Math.PI * 280) / 180, 0],
  }));
  const [medplantRef, apimedplant] = useBox(() => ({
    mass: 1,
    args: [5, 5, 5],
    position: [8, 0, -420],
    rotation: [0, (Math.PI * -25) / 180, 0],
  }));

  const [julietteRef, apijuliette] = useBox(() => ({
    mass: 1,
    args: [7, 5, 7],
    position: [8, 0, -340],
    rotation: [0, (Math.PI * -25) / 180, 0],
  }));

  return (
    <>
      <mesh ref={aquariumRef}>
        <primitive object={gltf} scale={[0.03, 0.03, 0.03]} />
      </mesh>
      <mesh ref={eaterPlantRef}>
        <primitive object={gltfeaterPlant.scene} scale={[0.01, 0.01, 0.01]} />
      </mesh>
      <mesh ref={fanRef}>
        <primitive
          object={gltffan.scene}
          position={[0, 6, 0]}
          scale={[0.2, 0.2, 0.2]}
        />
      </mesh>
      <mesh ref={medplantRef}>
        <primitive object={gltfmedplant.scene} scale={[3, 3, 3]} />
      </mesh>
      <mesh ref={julietteRef}>
        <primitive object={gltfjuliette.scene} scale={[0.06, 0.06, 0.06]} />
      </mesh>
    </>
  );
};

export default CarThree;
