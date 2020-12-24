import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";
import train from "../models/subway_train_interior/scene.glb";

const Train = (props) => {
  //trainRef: train's property in scene (read only)
  //api: train's physics object (methods to set/subscribe)
  const { scene } = useLoader(GLTFLoader, train);
  const [trainRef, api] = useBox(() => ({
    type: "Kinematic",
    args: [4.7, 1.3, 2],
    position: props.position,
    rotation: props.rotation,
  }));

  return (
    <>
      <mesh ref={trainRef}>
        <group dispose={null}>
          <primitive object={scene} scale={[0.1, 0.1, 0.1]} />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 140,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 380,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 380,
            ]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 620,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 620,
            ]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 860,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.1, 0.1, 0.1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 860,
            ]}
          />
        </group>
        <meshStandardMaterial wireframe={true} attach="material" />
      </mesh>
    </>
  );
};

export default Train;
