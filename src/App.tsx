import { Canvas } from "@react-three/fiber"
import Model from "./components/Model"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Sections/Home"
import Portfolio from "./components/Sections/Portfolio";
import AboutMe from "./components/Sections/AboutMe";


function App() {


  return (
    <div className="relative h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
      <Canvas shadows camera={{
            fov:45,
            near:0.1,
            far:2000,
          }}>
        <Model />
      </Canvas>
  </div>
  
  )
}

export default App
