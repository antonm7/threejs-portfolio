import { useLayoutEffect, useState } from "react"

export default function useWidth() {
    const [width,setWidth] = useState<number | null>(null)
    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',updateSize)  
        updateSize()
        return () => window.removeEventListener('resize',updateSize)
    },[])   
    return width
}
