import styles from './index.module.scss'

interface Props {
    title:string
    color:string
    bgColor:"pink" | "purple" | "orange"
}

export default function ColorBox({title, color,bgColor}:Props) {
    return (
        <div id={styles.wrapper} className={`mb-6 mr-4 flex items-center justify-center pt-3 pb-4 px-8 rounded-3xl 
        ${bgColor === 'pink' ? styles.pink : bgColor === 'purple' ? styles.purple : styles.orange}`}>
            <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor:color}}/>
            <span style={{color}} className="font-display font-normal text-3xl">{title}</span>
        </div>
    )
}