import React from "react";
import { useGLTF } from "@react-three/drei";
import {useFrame}  from "@react-three/fiber";
function Node() {
    const group = React.useRef();
    const model = useGLTF("/nodeop2.gltf");
    const [clicked, setClicked] = React.useState(false)
    console.log(model.scene);
    useFrame((state) => {
        if (clicked) {
            console.log(state);
        }

        return null
     })
    return (
        <primitive object={model.scene} scale={0.4} onClick={(...e) => console.log(...e)} />
    );
}

export default Node;
useGLTF.preload("/node.gltf");
