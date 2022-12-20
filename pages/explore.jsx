import React from 'react'
import { Canvas, ambientLight, boxGeometry, mesh, meshStandardMaterial, directionalLight } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer, DepthOfField, SSR } from "@react-three/postprocessing"
import { Suspense } from "react";

function Explore() {
    const config = { fov: 35, position: [0, 12, 10] }
    return (
        <Canvas frameloop="demand"> 
            {/* <PerspectiveCamera {...config} /> */}
            <EffectComposer>
                <DepthOfField />
                {/* <SSR /> */}
                <Bloom intensity={0.5} />
            </EffectComposer>
            {/* <ambientLight /> */}
            <OrbitControls onChange={(...e) => console.log(...e)}/>
            <Environment preset="forest" background />
        </Canvas>
    )
}

export default Explore