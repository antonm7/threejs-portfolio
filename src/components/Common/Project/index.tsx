import styles from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
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
        <div className={`${styles.wrapper} relative flex items-end pb-12 pl-7 w-full rounded-2xl h-[480px]`} style={{backgroundImage:`url(${img})`}}>
            <span onClick={() => navigateMethod()}  className='absolute top-7 right-7'>GO</span>
            <p className='font-display font-medium text-xl underline text-white'>{title}</p>
        </div>
    )
}