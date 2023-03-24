import styles from './index.module.scss';

interface Props {
    onClick?: () => void
    title:string
    marginRight?:string
}

export default function FullButton({onClick, title,marginRight}:Props) {
    return (
        <button onClick={onClick} className={`bg-mainPurple w-56 
        max-w-56 h-20 text-white rounded-2xl text-2xl font-bold font-display relative z-50 ${styles.wrapper}`}
        style={{marginRight}}>
            {title}
        </button>
    )
}