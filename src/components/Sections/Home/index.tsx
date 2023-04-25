import Layout from "../../Layout";
import email from '/assets/icons/email.svg'
import linkedin from '/assets/icons/linkedin.svg'
import twitter from '/assets/icons/twitter.png'
import styles from './index.module.scss'
import BorderedButton from "../../Common/Buttons/BorderedButton";
import FullButton from "../../Common/Buttons/FullButton";
import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import PurpleWrapper from "../../PurpleWrapper";

export default function Home() {
  const navigate = useNavigate()
  const setEmail = useStore(store => store.setEmail)

  return (
      <Layout>
        <PurpleWrapper />
        <div className="flex-col pt-8" id={styles.hi_titles_wrapper}>
          <h1 className="responsive_title font-integral font-bold leading-snug">
            👋 HI! I'M A FULL-STACK DEVELOPER
          </h1>
        </div>
        <p className="responsive_para font-display font-normal text-3xl max-w-2xl pt-12 leading-relaxed">
          Im a 21 years old from Israel. <br /> Im really passionate about developing and learning 
          everything related to the world of programming.
        </p>
        <div className="flex pt-16" id={styles.buttons_wrapper}>
          <BorderedButton onClick={() => navigate('/portfolio')} marginRight={"1.5rem"} title='See Portfolio'/>
          <FullButton onClick={() => navigate('/aboutMe')} title='About Me' marginRight={'1.5rem'}/>
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
