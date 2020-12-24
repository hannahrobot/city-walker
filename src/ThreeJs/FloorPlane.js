import React from "react";
import { usePlane } from "@react-three/cannon";

const FloorPlane = (props) => {
  const [planeRef] = usePlane(() => ({
    // rotation: props.rotation,
    position: props.position,
    mass: 0,
    ...props,
  }));

  return (
    <mesh ref={planeRef} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[45, 1450]} />
      <meshStandardMaterial attach="material" transparent={true} opacity={0} />
    </mesh>
  );
};

export default FloorPlane;
