import { Html } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import Model from "./components/Model"
import gsap from "gsap"

function App() {
  const [skills,setSkills] = useState<any>(false)
  const titlesRef = useRef<any>(null)

  const onSkills = () => {
    const tl = gsap.timeline()
    
    tl.to(titlesRef.current, {
      left:'-50%'
    })
    setSkills(true)
  }

  return (
    <div className="flex relative h-screen">
      <div ref={titlesRef} className="absolute z-50 w-[45%] py-32  pl-16">
        <h1 className="text-[#091434] tracking-tight leading-tight text-[3.9vw] font-semibold">
          My name is Anton <br />
          I'm a Frontend Developer
        </h1>
        <div className="pt-4">
          <h1 className="text-[2.4vw] font-semibold text-[#091434] inline-block">- my work</h1><br />
          <h1 onClick={() => onSkills()} className="text-[2.4vw] font-semibold text-[#091434] inline-block">- my skills</h1><br />
          <h1 className="text-[2.4vw] font-semibold text-[#091434] inline-block">- contact me</h1>
        </div>
        </div>
          <Canvas shadows camera={{
            fov:45,
            near:0.1,
            far:2000,
          }}>
        <Model skills={skills}/>
      </Canvas>
    
  </div>
  
  )
}

export default App
