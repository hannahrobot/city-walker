import React from "react";
import { usePlane } from "@react-three/cannon";

const SidePlane = (props) => {
  const [planeRef] = usePlane(() => ({
    rotation: props.rotation,
    position: props.position,
    mass: 0,
    ...props,
  }));

  return (
    <mesh ref={planeRef}>
      <planeBufferGeometry attach="geometry" args={[1400, 20]} />
      <meshStandardMaterial attach="material" transparent={true} opacity={0} />
    </mesh>
  );
};

export default SidePlane;
