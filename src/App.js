import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";



import NavigationBar from "./components/Navbar";
import SpinningMesh from "./components/Home/SpinningMesh";


import Projects from "./components/Projects/Projects";

import styled from "styled-components";
import Profile from "./components/Home/Profile";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/Contact/ContactMe";
import ScreenHeading from "./utilities/ScreenHeading/ScreenHeading";
import ResumeButton from "./components/Projects/ResumeButton";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;



function App() {
  return (
    <div className="app">
      <NavigationBar className="navbar" />
      <div className="profile">
        <Profile/>
      </div>
      
      {/*A litte short profile */}

      {/* The 3D background section */}
      <CanvasContainer>
        <Suspense fallback={null}>
          <Canvas
            colorManagement
            shadowMap
            camera={{ position: [-5, 2, 5], fov: 60 }}
          >
            <ambientLight intensity={0.3} />
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
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
              <SpinningMesh
                postion={[0, 1, 0]}
                color="lightblue"
                args={[3, 2, 1]}
                speed={2}
              />
              <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
              <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
            </group>
            <OrbitControls />
          </Canvas>
        </Suspense>
      </CanvasContainer>

      {/* About me section */}
      <div className="about-me">
        <AboutMe/>
      </div>

      <div className="projects">
      <ScreenHeading title={"Projects"} />

        <div className="row">
          <div className="col-4">
            <Projects 
              title="INDEED WEB SCRAPER"
              text="Scrape Indeed Review. Technology stack:  Python BeautifulSoup, Pandas, Matplotlib"
            />
          </div>
          <div className="col-4">
            <Projects
              title = "STOCK PREDICTOR"
              text = "tech stack: machine learning sckilearn"
            />
          </div>
          <div className="col-4">
            <Projects
              title ="GARBAGE CLASSIFIER"
              text = "tensorflow, react native"/>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <ResumeButton/>
          </div>
        </div>

      </div>

      

      <div className="contact">
        <ContactMe/>
      </div>

    </div> 
  );
};
export default App;
