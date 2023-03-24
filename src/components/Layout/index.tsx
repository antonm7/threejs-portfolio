import styles from './index.module.scss'
import {motion} from 'framer-motion'

const animation = {
    initial: {opacity:0 },
    animate:{opacity:1},
    exit:{opacity:0}
}

const Layout = ({children}:any) => {
    return (
        <motion.div 
        variants={animation} 
        initial="initial" 
        animate="animate"
        exit="exit"
        id={styles.width_container}
        className="absolute z-50 w-[52vw] h-min p-4" >
            <div className={`z-[0] w-full h-full rounded-3xl p-16 overflow-auto`} id={styles.wrapper}>
                {children}
            </div>
        </motion.div>
    )
}

export default Layout
