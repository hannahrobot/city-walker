import React from "react";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={300} />
    </mesh>
  );
};

export default Box;
