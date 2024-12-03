import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import Setup from "./Setup";
import useWidth from "../helpers/useWindowSize";
import React from "react";

function Model() {
  const lightRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const width = useWidth();

  return (
    <>
      <ambientLight color={"white"} intensity={0.5} />
      <PresentationControls
        polar={[-Math.PI / 1000, Math.PI / 1000]}
        azimuth={[-Math.PI / 100, Math.PI / 100]}
      >
        <group
          scale={width && width >= 901 ? 1.1 : 1.1}
          ref={modelRef}
          position={
            width && width >= 1800
              ? [1.8, -2.5, -1.1]
              : width && width >= 901
              ? [0.1, -2.5, -1]
              : width && width >= 601
              ? [0, -5, -4]
              : [-0.2, -7, -10]
          }
          rotation={width && width >= 901 ? [0, -0.5, 0] : [0, 0, 0]}
        >
          <pointLight
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
            ref={lightRef}
            castShadow
            color={"#FFEECF"}
            intensity={0.3}
            position={[4, 5, 4]}
            shadow-bias={-0.0001}
          />
          <Setup />
        </group>
      </PresentationControls>
    </>
  );
}

export default React.memo(Model);
