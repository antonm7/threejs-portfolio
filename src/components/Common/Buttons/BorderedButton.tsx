import styles from './index.module.scss';

interface Props {
    onClick?: () => void
    title:string,
    marginRight?:string
}

export default function BorderedButton({onClick, title,marginRight}:Props) {
    return (
        <button onClick={onClick} style={{marginRight:marginRight ? marginRight : '0'}} className={`bg-white w-56 
        max-w-72 h-20 text-mainPurple rounded-2xl text-2xl 
        unselectable
        font-bold border-2 border-mainPurple font-display relative z-50 ${styles.wrapper}`}>
            {title}
        </button>
    )
}