import { useState } from "react";
import styled from "styled-components";
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
    <div style={{
        position:"relative",
        marginTop:"225px"
    }}>
      <Canvas
        camera={{ position: [200, 65, 140], fov: 3 }}
        style={{
          position: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent:"center",
          width: "24vw", // INCREASE THIS WHEN QMEDIA SCREEN BECOMES SMALLER
          height: "60vh",
          top: "20vh",
          backgroundColor: "pink",
          paddingTop: "100px"
         
        }}
      >
        <ambientLight intensity={1.5} color="white" />
        <directionalLight intensity={1.7} color="azure" />
        <Suspense fallback={null}>
          <Model/>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeD;
