import Layout from "../../Layout";
import email from '/assets/icons/email.webp'
import github from '/assets/icons/github.png'
import styles from './index.module.scss'
import BorderedButton from "../../Common/Buttons/BorderedButton";
import FullButton from "../../Common/Buttons/FullButton";
import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import PurpleWrapper from "../../PurpleWrapper";
import { Link } from "react-router-dom";

export default function Home() {
  const setEmail = useStore(store => store.setEmail)
  return (
      <Layout>
        <PurpleWrapper />
        <div className="flex-col pt-8" id={styles.hi_titles_wrapper}>
          <h1 className="responsive_title font-integral font-bold leading-snug">
            👋 HI! I'M A FULL-STACK DEVELOPER
          </h1>
        </div>
        <p className="responsive_para font-display font-normal text-3xl max-w-2xl pt-12 leading-loose">
          I'm Anton, a 21-year-old full-stack junior developer from Israel. <br />
          Passionate about coding and love to learn new technologies, I find joy in bringing ideas to life through development.
          I am dedicated to improve my skills and staying updated with the latest industry trends.
        </p>
        <div className="flex pt-16" id={styles.buttons_wrapper}>
          <Link to={'/portfolio'}>
            <BorderedButton marginRight={"1.5rem"} title='See Portfolio'/>
          </Link>
          <Link to={'/aboutMe'}>
            <FullButton title='About Me' marginRight={'1.5rem'}/>
          </Link>
        </div>
        <div className="flex items-center pt-9">
          <span className="text-xl text-[#323232] font-display font-medium pr-3" id={styles.contact_me_text}>Contact me via: </span>
          <img onClick={() => setEmail(true)} src={email} className={`${styles.icon} unselectable cursor-pointer h-4 mr-4 unselectable`}/>
          <a href="https://github.com/antonm7" target="_blank">
            <img src={github} loading="lazy" className={`${styles.icon} h-5 cursor-pointer mr-7 unselectable`}/>
          </a>
        </div>
    </Layout>
  )
}
