import { useState } from "react";
import styled from "styled-components";
import {ModelContainer} from "./design"
import { OrbitControls } from "@react-three/drei";

import React, { Suspense } from "react";
import {
  useGLTF,
  Stage,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BsPiggyBank } from "react-icons/bs";

function Model() {
  const { scene } = useGLTF("scene.glb");
  return <primitive object={scene} />;
}

function ThreeD(props) {
  return (
    <ModelContainer>
      <Canvas
        camera={{ position: [200, 65, 140], fov: -5.585 }}
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          overflow: "visible",
          paddingBottom: "200px",
          top: "-300px"

        }}
      >
        <ambientLight intensity={1.5} color="white" />
        <directionalLight intensity={1.7} color="azure" />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls  enablePan={false} enableZoom={false}  />
        </Suspense>
      </Canvas>
    </ModelContainer>
  );
}

export default ThreeD;
