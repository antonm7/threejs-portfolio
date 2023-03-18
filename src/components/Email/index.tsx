import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useStore } from '../../store';
import FullButton from '../Common/FullButton';
import styles from './index.module.scss';

export default function Email() {
    const [isCopied,setCopied] = useState<boolean>(false)
    const changeEmail = useStore(state => state.setEmail)

    const copy = () => {
        navigator.clipboard.writeText('migolkoanton@gmail.com')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        },1500)
    }

    return (
        <div className="absolute w-full h-full " id={styles.wrapper}>
            <div className='relative z-50 opacity-100 m-auto 
            mt-12 h-min
             flex flex-col items-center justify-center w-min
              bg-white px-12 py-4 rounded-lg'>
                <FontAwesomeIcon onClick={() => changeEmail(false)} className='absolute right-6 top-4 h-5 cursor-pointer' icon={faXmark}/>
                <h1 className='opacity-90 text-textGray font-display text-3xl font-bold'>My Email</h1>
                <p className='pt-2 opacity-90 text-center text-textGray font-fisplay text-lg font-bold'>
                    Feel free to contact me anytime for everything!
                </p>
                <span className='opacity-90 pt-3 text-textGray font-display text-3xl font-semibold'>migolkoanton@gmail.com </span>
                <div className='pt-6 pb-2'>
                    <button onClick={() => copy()} className={`text-lg px-6 py-2 ${isCopied ? 'bg-green-600' : 'bg-mainPurple'} 
                    rounded-lg text-white font-display font-medium`}>{isCopied ? 'copied' : 'copy'}</button>
                </div>
            </div>
        </div>
    )
}