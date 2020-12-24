import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { OrthographicCamera } from "@react-three/drei";

const Viewport = (props) => {
  const viewportRef = useRef();
  const frustumSize = 800;

  const miniMapLocationLeftPixels =
    window.innerWidth - 8 - window.innerWidth * 0.2;
  const miniMapLocationBottomPixels = 8;

  useFrame(({ gl, scene, camera }) => {
    gl.autoClear = true;
    gl.setViewport(0, 0, window.innerWidth, window.innerHeight);
    gl.setScissor(0, 0, window.innerWidth, window.innerHeight);
    gl.setScissorTest(true);
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();

    // render minicamera
    gl.setViewport(
      miniMapLocationLeftPixels,
      miniMapLocationBottomPixels,
      window.innerWidth * 0.2,
      window.innerHeight * 0.2
    );

    gl.setScissor(
      miniMapLocationLeftPixels,
      miniMapLocationBottomPixels,
      window.innerWidth * 0.2,
      window.innerHeight * 0.2
    );

    gl.setScissorTest(true);
    viewportRef.current.position.x = props.viewPosition.x;
    viewportRef.current.position.y = 300;
    viewportRef.current.position.z = props.viewPosition.z;
    viewportRef.current.updateMatrixWorld();
    viewportRef.current.updateProjectionMatrix();
    gl.render(scene, viewportRef.current);
  }, 1);

  return (
    <>
      <OrthographicCamera
        ref={viewportRef}
        zoom={4.5}
        rotation={[(Math.PI * -90) / 180, 0, 0]}
        left={frustumSize / -2}
        right={frustumSize / 2}
        top={frustumSize / 2}
        bottom={frustumSize / -2}
        far={500}
        near={250}
      />
    </>
  );
};

export default Viewport;
