import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
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
    <div className="relative h-screen">
      <div ref={titlesRef} className="absolute z-50 w-[45%] py-32  pl-16">
        <h1 className="cyber-text text-4xl">
          Anton.
        </h1>
        <h1 className=" text-[#ff3838cc] tracking-tight leading-tight text-[4.7vw] font-semibold">
          I'm a Frontend<br /> Developer
        </h1>
        <div className="pt-4">
          <h1 className="text-[2.4vw] font-semibold text-white inline-block">my_work</h1><br />
          <h1 onClick={() => onSkills()} className="text-[2.4vw] font-semibold text-white inline-block">my_skills</h1><br />
          <h1 className="text-[2.4vw] font-semibold text-white inline-block">contact_me</h1>
        </div>
        </div>
          <Canvas shadows camera={{
            fov:45,
            near:0.1,
            far:2000,
          }}>
        <Model skills={skills}/>
      </Canvas>
      <div>
        jdksaljdskla
      </div>
    
  </div>
  
  )
}

export default App
