
import { useState } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

import React, { Suspense } from 'react';
import { useGLTF, Stage, PerspectiveCamera, OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { BsPiggyBank } from "react-icons/bs";

function Model() {
    const { scene } = useGLTF("scene.glb");
    return <primitive object={scene} />
}


function ThreeD(props) {
    return (
        <div >
            <Canvas camera={{ position: [200, 65, 140], fov: 5.7, }} style={{

                position: "absolute",
                width: "24vw",
                height: "136vh",
                // marginTop: "200px",
                top: "-85px",
                // backgroundColor: "pink",
                // transform:"scale3d(2.5, 1.2, 0.3);

            }}>
                <ambientLight intensity={1.5} color="white" />
                <directionalLight intensity={1.7} color="azure" />
                <Suspense fallback={null}>

                    <Model />
                    <OrbitControls />

                </Suspense>
            </Canvas>
        </div>



    )
}

export default ThreeD;