import styles from './index.module.scss';

interface Props {
    onClick?: () => void
    title:string
}

export default function BorderedButton({onClick, title}:Props) {
    return (
        <button onClick={onClick} className={`bg-white w-64 
        max-w-72 h-20 text-mainPurple rounded-2xl text-2xl 
        font-bold border-2 border-mainPurple font-display relative z-50 ${styles.wrapper}`}>
            {title}
        </button>
    )
}