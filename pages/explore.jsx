import React from 'react'
import { Canvas, ambientLight, boxGeometry, mesh, meshStandardMaterial, directionalLight } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Bloom, EffectComposer, DepthOfField, SSR } from "@react-three/postprocessing"
import { Suspense } from "react";
import Node from './components/models/Node';

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
            <Node />
            {/* <ambientLight /> */}
            <OrbitControls onChange={(...e) => console.log(...e)} target={[10, 0, 4]} />
            <Environment preset="forest" background />
        </Canvas>
    )
}

export default Explore