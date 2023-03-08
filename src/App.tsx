import { Canvas } from "@react-three/fiber"
import Model from "./components/Model"
import styles from './index.module.scss'
import A from '/assets/general/A.svg'
import A_white from '/assets/general/a_white.svg'

function App() {
  return (
    <div className="relative h-screen">
        <div className="absolute z-50 w-[52vw] h-full p-4">
          <div className="w-full h-full rounded-3xl px-16 py-16" id={styles.wrapper}>
            <span className="flex items-end font-integral font-bold text-5xl">
              <img src={A} className="h-[2.3rem] pr-[1px] mb-[1px]"/>
              NTON
            </span>
            <div className="flex-col pt-16" id={styles.hi_titles_wrapper}>
              <div className="flex items-start flex-nowrap">
                <h1 className="font-integral font-bold text-5xl">
                  👋HI! I'M  
                </h1>
                <div className="flex flex-nowrap bg-mainPurple ml-5 mt-[-0.8rem] rounded-2xl w-[230px] h-[84px] relative">
                  <img src={A_white} className="h-9 pr-[3px] absolute" id={styles.a_white}/>
                  <span className="text-5xl font-bold font-integral text-white absolute" id={styles.nton_white}>NTON</span>
                </div>
              </div>
              <h1 className="font-integral font-bold text-5xl pt-4">
                FULL-STACK DEVELOPER
              </h1>
            </div>
            <p className="font-display font-normal text-3xl max-w-2xl pt-12 leading-relaxed">
              As a developer, I have a strong passion for creating elegant and efficient solutions to complex problems, while learning in real time. I have 4 years of experience in Front and Back development.
            </p>
          </div>
        </div>
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
