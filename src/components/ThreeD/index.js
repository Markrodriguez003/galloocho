
import { useState } from "react";
import styled from "styled-components";
import {OrbitControls} from "@react-three/drei";

import React, { Suspense } from 'react';
import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

function Model() {
    const { scene } = useGLTF("rooster.glb");
    return <primitive object={scene} />
}

// function Light({ brightness, color }) {
//     return (
//       <rectAreaLight
//         width={3}
//         height={3}
//         color={color}
//         intensity={brightness}
//         position={[45, 10, 12]}
//         lookAt={[0, 0, 0]}
//         penumbra={1}
//         castShadow
//       />
//     );
//   }



function ThreeD(props) {
    return (
        <div style={{ height: "100vh", width: "50vw", backgroundColor: "white", marginLeft:"auto", marginRight:"auto"    }}>
    
            <Canvas  shadows camera={{ position: [52, 18, 23], fov: 100.5 }}>
            <ambientLight intensity={5.5} color="grey" />
                {/* <pointLight position={[40,10,15]} intensity={1.4} power={1.5} distance={2} /> */}
                <Suspense fallback={null}>
                    
                    <OrbitControls />
                    <Model />
                </Suspense>
            </Canvas>


        </div>
    )
}

export default ThreeD;