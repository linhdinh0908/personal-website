import './App.css';
import { Canvas } from '@react-three/fiber';
import SpinningMesh from './components/SpinningMesh';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Profile from './components/Profile';
import Intro from './components/Intro';
import Form from './components/Form';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  `;



function App() {
  return (
    <>
    <Navbar/>
    <CanvasContainer>
        <Suspense fallback={null}>
          <Canvas  colorManagement shadowMap camera={{ position: [-5, 2, 5], fov: 60 }}>
            <ambientLight intensity={0.3}/>
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <group>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -3, 0]}
                receiveShadow>
                <planeBufferGeometry attach = 'geometry' args={[100,100]}/>
                <shadowMaterial attach ='material' opacity ={0.3} />
              </mesh>
              <SpinningMesh postion = {[0,1,0]} color='lightblue' args ={[3,2,1]} speed ={2}/>
              <SpinningMesh position ={[-2,1,-5]} color='pink' speed ={6}/>
              <SpinningMesh position ={[5,1,-2]} color='pink' speed ={6}/>
            </group>
            <OrbitControls/>
          </Canvas>
        </Suspense>
    </CanvasContainer>
    <Profile/>
    <Intro/>
    <Projects/>
    <Form/>

    </>
  );
}
export default App;
