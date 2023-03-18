import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import ArrowLink from '../ArrowLink'
interface Props {
    img:string
    title:string
    to:string
}

export default function Project({img,title,to}:Props) {
    const navigate = useNavigate()

    const navigateMethod = () => {
        navigate(`/project/${to}`)
    }

    return (
        <div className={`${styles.wrapper} relative flex justify-between items-end pb-9 px-7 w-full rounded-2xl h-[480px]`} style={{backgroundImage:`url(${img})`}}>
            <p onClick={() => navigateMethod()} className='cursor-pointer font-display font-medium text-xl underline text-white'>{title}</p>
            <ArrowLink method={() => navigateMethod()} />
        </div>
    )
}