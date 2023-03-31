import { Canvas } from "@react-three/fiber"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import styles from './app.module.scss';
import Home from "./components/Sections/Home"
// import Model from "./components/Model";
import Portfolio from "./components/Sections/Portfolio";
import AboutMe from "./components/Sections/AboutMe";
import Poetry from "./components/Sections/Work/Poetry";
import Magic from "./components/Sections/Work/Magic";
import Landify from "./components/Sections/Work/Landify";
import Keeper from "./components/Sections/Work/Keeper";
import GameFevr from "./components/Sections/Work/GameFevr";
import Auth from "./components/Sections/Work/Auth";
import Email from "./components/Email";
import { useStore } from "./store";
import React, { Suspense } from "react";

function App() {
  const emailVisibility = useStore(state => state.email)

  const Model = React.lazy(() => import('./components/Model'))
  // const Home = React.lazy(() => import('./components/Sections/Home'))
  // const AboutMe = React.lazy(() => import('./components/Sections/AboutMe'))
  // const Portfolio = React.lazy(() => import('./components/Sections/Portfolio'))
  // const Poetry = React.lazy(() => import('./components/Sections/Work/Poetry'))
  // const Magic = React.lazy(() => import('./components/Sections/Work/Magic'))
  // const Landify = React.lazy(() => import('./components/Sections/Work/Landify'))
  // const Keeper = React.lazy(() => import('./components/Sections/Work/Keeper'))
  // const GameFevr = React.lazy(() => import('./components/Sections/Work/GameFevr'))
  // const Auth = React.lazy(() => import('./components/Sections/Work/Auth'))

  return (
    <div className="relative h-screen">
        {emailVisibility ? <Email /> : null}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/poetry" element={<Poetry />} />
            <Route path="/project/magicEditor" element={<Magic />} />
            <Route path="/project/landify" element={<Landify />} />
            <Route path="/project/keeper" element={<Keeper />} />
            <Route path="/project/gameFevr" element={<GameFevr />} />
            <Route path="/project/auth" element={<Auth />} />
          </Routes>
        </BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Canvas id={styles.canvas} className={`h-auto`} shadows 
            camera={{
              fov:45,
              near:0.1,
              far:2000
            }}>
            <Model />
          </Canvas>
        </Suspense>
      </div>
  )
}

export default App
