import useWidth from '../../helpers/useWindowSize'
import styles from './index.module.scss'

const Layout = ({children}:any) => {
    const width = useWidth()
    
    if (width && width >= 601) {
        return (
            <div id={styles.width_container} className="absolute z-50 w-[52vw] p-4">
                <div className={`z-[0] w-full h-full rounded-3xl p-16 overflow-auto`} id={styles.wrapper}>
                    {children}
                </div>
           </div>
        )
    } else {
         return (
            <div id={styles.small_wrapper}>
                {children}
            </div>
        )
    }
}

export default Layout
