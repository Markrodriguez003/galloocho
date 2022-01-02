import { useState, useRef } from "react";
import styled from "styled-components";
import { ModelContainer } from "./design"


// import ModelDemo from "../../models/RoosterTest.glb"
import ModelDemo from "../../models/Rooster1.glb"
import React, { Suspense } from "react";
import "@google/model-viewer/dist/model-viewer";

import "./script";
 

function ThreeD(props) {

  
  return (
    <>
      < ModelContainer >
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "black",


        }}>
          <model-viewer
            src={ModelDemo}
            seamless-poster
            shadow-intensity="1"
            camera-controls
            auto-rotate
            rotation-per-second="30deg"
            auto-rotate-delay="1000"
            disable-zoom
            ar
            id="rooster"

            style={{
              backgroundColor: "transparent",
              display: "inline",
              position: "absolute",
              width: "450px",
              height: "600px"
            }}
          />
        </div>
      </ModelContainer>
    </>
  );
}

export default ThreeD;




/*


import { OrbitControls } from "@react-three/drei";

import {
  useGLTF,
  Stage,
  PerspectiveCamera,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BsPiggyBank } from "react-icons/bs";



// function Model() {
//   const { scene } = useGLTF("hen.glb");
//   return <primitive object={scene} />;
// }

// OLD MODEL

// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/GalloOchoModel.gltf')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         geometry={nodes.Gallo_Ocho_Fixed_Letters_Final.geometry}
//         material={nodes.Gallo_Ocho_Fixed_Letters_Final.material}
//         position={[0, 13, 0]}
//       />
//       <mesh
//         geometry={nodes.Gallo_Ocho_Fixed_Letters_Final002.geometry}
//         material={nodes.Gallo_Ocho_Fixed_Letters_Final002.material}
//         position={[0, 13, 0]}
//       />
//     </group>
//   )
// }

// LATEST MODEL
// function Model({ ...props }) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/hen.glb')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group scale={0.125}>
//         <mesh geometry={nodes.Mesh.geometry} material={nodes.Mesh.material} />
//         <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material}  />
//         <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material}  />
//         <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material}  />
//         <mesh geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material}  />
//         <mesh geometry={nodes.Mesh_5.geometry} material={nodes.Mesh_5.material} />
//         <mesh geometry={nodes.Mesh_6.geometry} material={nodes.Mesh_6.material} />
//         <mesh geometry={nodes.Mesh_7.geometry} material={nodes.Mesh_7.material}/>
//         <mesh geometry={nodes.Mesh_8.geometry} material={nodes.Mesh_8.material} />
//         <mesh geometry={nodes.Mesh001.geometry} material={nodes.Mesh001.material} />
//         <mesh geometry={nodes.Mesh001_1.geometry} material={nodes.Mesh001_1.material}  />
//         <mesh geometry={nodes.Mesh001_2.geometry} material={nodes.Mesh001_2.material}  />
//       </group>
//     </group>
//   )
// }







// old code
 <ModelContainer>
      <Canvas
        camera={{ position: [90, 25, 145], fov: 21.285 }}
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          overflow: "visible",
          // paddingBottom: "200px",
          top: "150px"

        }}
      >
        <ambientLight intensity={1.5} color="white" />
        <directionalLight intensity={1.7} color="azure" />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
    </ModelContainer>





// old old code
  <ModelContainer>
      <Canvas
        camera={{ position: [90, 25, 145], fov: 0.285 }}
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          overflow: "visible",
          // paddingBottom: "200px",
          top: "150px"

        }}
      >
        <ambientLight intensity={1.5} color="white" />
        <directionalLight intensity={1.7} color="azure" />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
    </ModelContainer>
*/