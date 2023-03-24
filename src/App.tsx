import { Canvas } from "@react-three/fiber"
import Model from "./components/Model"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import styles from './app.module.scss';
import Home from "./components/Sections/Home"
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
import { Suspense } from "react";

function App() {
  const emailVisibility = useStore(state => state.email)

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
        <Canvas id={styles.canvas} className={`h-auto`} shadows 
          camera={{
            fov:45,
            near:0.1,
            far:2000
          }}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
  )
}

export default App
