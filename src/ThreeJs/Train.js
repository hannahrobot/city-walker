import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";
import train from "../models/subway_car_r62a/scene.glb";
// import train from "../models/subway_train_interior/scene.glb";

const Train = (props) => {
  //trainRef: train's property in scene (read only)
  //api: train's physics object (methods to set/subscribe)
  const { scene } = useLoader(GLTFLoader, train);
  const [trainRef] = useBox(() => ({
    type: "Kinematic",
    args: [4.7, 1.1, 2],
    position: props.position,
    rotation: props.rotation,
  }));

  return (
    <>
      <mesh ref={trainRef}>
        <group dispose={null}>
          <primitive object={scene} scale={[0.04, 0.04, 0.04]} />
          <primitive
            object={scene.clone(true)}
            scale={[0.04, 0.04, 0.04]}
            position={[props.position[0] + 190, 0, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.04, 0.04, 0.04]}
            position={[props.position[0] + 370, 0, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[0.04, 0.04, 0.04]}
            position={[props.position[0] + 550, 0, 0]}
          />
          {/* <primitive
            object={scene.clone(true)}
            scale={[0.04, 0.04, 0.04]}
            position={[props.position[0] + 730, 0, 0]}
          /> */}
          {/* <primitive
            object={scene.clone(true)}
            scale={[1, 1, 1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 180,
            ]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[1, 1, 1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 620,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[1, 1, 1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 620,
            ]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[1, 1, 1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 860,
            ]}
            rotation={[0, (Math.PI * 180) / 180, 0]}
          />
          <primitive
            object={scene.clone(true)}
            scale={[1, 1, 1]}
            position={[
              props.position[0],
              props.position[1],
              props.position[2] - 860,
            ]}
          /> */}
        </group>
        <meshStandardMaterial wireframe={true} attach="material" />
      </mesh>
    </>
  );
};

export default Train;
