import { useState } from "react";
import { ModelContainer } from "./design"

// MODELS
import ModelDemo from "../../models/Rooster1.glb"

// COMPONENTS
// SUSPENSE COULD BE CAUSING THE CSS ISSUES
// import React, { Suspense } from "react";
import React from "react";
import "@google/model-viewer/dist/model-viewer";

// ICONS
import { BsArrowRepeat } from "react-icons/bs"

// IMAGES
import poster from "../../imgs/gif/loading.gif"

// SCRIPTS

// CSS
import "./style.css"
function ThreeD(props) {

  window.onload = function () {

    // THIS SETS A VARIABLE TO ROOSTER MODEL
    const modelVariants = document.querySelector("model-viewer#rooster");
    const modelRandomizer = document.querySelector("ModelContainer#randomTextureBtn")

    // THIS TESTS TO SEE IF MODEL IS DOWNLOADED.
    modelVariants.addEventListener("load", function () {

      // MESSAGE CONFIRMING DOWNLOADED MODEL
      console.log("MODEL HAS FINISHED DOWNLOADING!");

      // PRINTS TO SEE IF MODEL HAS BEEN LOADED ONTO PAGE
      modelVariants.addEventListener("model-visibility", function () {

        // MESSAGE CONFIRMING MODEL LOADED ONTO PAGE
        console.log("MODEL HAS FINISHED LOADING TO SITE!");

        if (modelVariants.modelIsVisible === true) {

          // console.log("HAS MODEL BEEN LOADED? -> " + modelVariants.modelIsVisible);

          // PRINTS OUT MODEL ELEMENT HTML
          // console.log("MODAL HTML -> " + modelVariants);

          // LISTS TOTAL AMOUNT OF VARIANTS
          // console.log("TOTAL AMOUNT OF MODEL TEXTURE VARIANTS -> " + modelVariants.availableVariants.length);

          // LISTS ALL VARIANTS (ARRAY)
          // console.log("LIST OF MODEL TEXTURE VARIANTS -> " + modelVariants.availableVariants);

          // EXAMPLE - PRINTS OUT THE 2 ELEMENT WITHIN VARIANT ARRAY ABOVE
          // console.log(modelVariants.availableVariants[2]);

          // PRINTS OUT RANDOM NUMBER FOR TEXTURE ARRAY
          let x = Math.floor(Math.random() * 10);
          
        // SETS NEW TEXTURE TO MODEL
          modelVariants.variantName = modelVariants.availableVariants[x];

          // THIS WILL PRINT ERROR MESSAGE WHEN MODEL FAILED TO LOAD (SETUP POSTER) 
        } else if (modelVariants.modelIsVisible === null) {
          // console.log("Model is visible");
        }
      })
    });
  }
  const [texture, setTexture] = useState(0);

  // function changeTexture() {
  //   let x = Math.floor(Math.random() * 10);
  // setTexture(modelVariants.variantName[x])
  // }

  return (
    <>
          <model-viewer
            src={ModelDemo}
            seamless-poster
            shadow-intensity="1"
            camera-controls
            auto-rotate
            camera-orbit="-65.39deg 80.94deg auto"
            rotation-per-second="30deg"
            auto-rotate-delay="1000"
            poster={poster}
            disable-zoom
            interaction-prompt
            ar
            id="rooster"
          />
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