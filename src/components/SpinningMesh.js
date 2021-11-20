import { MeshWobbleMaterial} from '@react-three/drei';
import React from 'react'
import { useRef} from 'react'; 
import { useFrame } from '@react-three/fiber';


function SpinningMesh({ position, color, speed, args }) {
    const mesh = useRef();

    //useFrame allows us to re-render/update rotation on each frame
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return(
        <mesh
        position={position}
        ref={mesh}
        castShadow>
        <boxBufferGeometry attach='geometry' args={args} />
        <MeshWobbleMaterial
            color={color}
            speed={speed}
            attach='material'
            factor={0.6}
        />
        </mesh>
    );
}

export default SpinningMesh
