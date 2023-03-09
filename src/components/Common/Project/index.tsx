import styles from './index.module.scss'

interface Props {
    img:string
    title:string
}

export default function Project({img,title}:Props) {
    return (
        <div className={`${styles.wrapper} flex items-end pb-12 pl-7 w-full rounded-2xl h-[480px]`} style={{backgroundImage:`url(${img})`}}>
            <p className='font-display font-medium text-xl underline text-white'>{title}</p>
        </div>
    )
}