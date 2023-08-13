import styles from './index.module.scss';
import A_white from '/assets/general/a_white.svg'

export default function PurpleWrapper() {
    return (
        <div id={styles.wrapper} className="unselectable flex flex-nowrap bg-mainPurple rounded-2xl w-[230px] h-[84px] relative">
            <img src={A_white} className="h-8 pr-[3px] absolute" id={styles.a_white}/>
            <span className="font-bold font-integral text-white absolute" id={styles.nton_white}>NTON</span>
        </div>
    )
}