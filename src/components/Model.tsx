import { PresentationControls, Stats } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLayoutEffect, useRef, useState } from 'react'
import Setup from './Setup'
import gsap from 'gsap'
import useWidth from '../helpers/useWindowSize'

export default function Model() {
    const lightRef = useRef<any>(null)
    const modelRef = useRef<any>(null)
    const width = useWidth()

    return (
        <>
            <Stats />
            <ambientLight color={'white'} intensity={0.5}/>
            <PresentationControls  
                polar={[-Math.PI / 1000, Math.PI / 1000]} 
                azimuth={[-Math.PI / 100, Math.PI / 100]} >
                <group scale={width && width >= 901 ? 1.1 : 0.9} ref={modelRef} 
                    position={width && width >= 901 ? [0.4,-2.5,-1.1] : [-0.2,-5,-7]}
                    rotation={width && width >= 901 ? [0,-0.5,0] : [0,0,0]}>
                    <pointLight shadow-mapSize-height={2048} shadow-mapSize-width={2048} 
                    ref={lightRef} castShadow color={'#FFEECF'} intensity={0.3}position={[4,5,4]} shadow-bias={-0.0001} />
                    <Setup />
                </group>
            </PresentationControls>
        </>
    )
}