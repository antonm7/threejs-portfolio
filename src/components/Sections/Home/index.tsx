import Layout from "../../Layout";
import A_white from '/assets/general/a_white.svg'
import email from '/assets/icons/email.png'
import linkedin from '/assets/icons/linkedin.png'
import twitter from '/assets/icons/twitter.png'
import styles from './index.module.scss'
import BorderedButton from "../../Common/Buttons/BorderedButton";
import FullButton from "../../Common/Buttons/FullButton";
import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate()
  const setEmail = useStore(store => store.setEmail)
  const updateLocation = useStore(store => store.updateLocation)

  useEffect(() => {
    updateLocation('/')
  },[])

  return (
      <Layout>
        <div id={styles.purple_wrapper} className="flex flex-nowrap bg-mainPurple rounded-2xl w-[230px] h-[84px] relative">
          <img src={A_white} className="h-9 pr-[3px] absolute" id={styles.a_white}/>
          <span className="responsive_title text-5xl font-bold font-integral text-white absolute" id={styles.nton_white}>NTON</span>
        </div>
        <div className="flex-col pt-8" id={styles.hi_titles_wrapper}>
          <h1 className="responsive_title font-integral font-bold text-5xl leading-snug">
            👋 HI! I'M A FULL-STACK DEVELOPER
          </h1>
        </div>
        <p className="responsive_para font-display font-normal text-3xl max-w-2xl pt-12 leading-relaxed">
          Im a 21 years old from Israel. <br /> Im really passionate about developing and learning 
          everything related to the world of programming.
        </p>
        <div className="flex pt-20" id={styles.buttons_wrapper}>
          <FullButton onClick={() => navigate('/aboutMe')} title='About Me' marginRight={'1.5rem'}/>
          <BorderedButton onClick={() => navigate('/portfolio')} title='See Portfolio'/>
        </div>
        <div className="flex items-center pt-9">
          <span className="responsive_subTitle text-[#323232] font-display font-medium
          text-3xl pr-5" id={styles.contact_me_text}>Contact me via: </span>
          <img onClick={() => setEmail(true)} src={email} className={`${styles.icon} cursor-pointer mr-7`}/>
          <a href="https://www.linkedin.com/in/anton-migolko-31980b213/" target="_blank">
            <img src={linkedin} className={`${styles.icon} cursor-pointer mr-7`}/>
          </a>
        </div>
    </Layout>
  )
}
