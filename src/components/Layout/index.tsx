import ScrollToTop from '../../helpers/scrollToTop'
import useWidth from '../../helpers/useWindowSize'
import styles from './index.module.scss'
import {motion} from 'framer-motion'

const animation = {
    initial: {opacity:0 },
    animate:{opacity:1},
    exit:{opacity:0}
}

const Layout = ({children}:any) => {
    const width = useWidth()
    
    if (width && width >= 601) {
        return (
            <motion.div 
            variants={animation} 
            initial="initial" 
            animate="animate"
            exit="exit"
            id={styles.width_container}
            className="absolute z-50 w-[52vw] p-4" >
                <div className={`z-[0] w-full h-full rounded-3xl p-8 overflow-auto`} id={styles.wrapper}>
                    <ScrollToTop />
                    {children}
                </div>
           </motion.div>
        )
    } else {
         return (
            <div id={styles.small_wrapper}>
                <ScrollToTop />
                {children}
            </div>
        )
    }
}

export default Layout