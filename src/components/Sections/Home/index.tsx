import Layout from "../../Layout";
import A from '/assets/general/A.svg'
import A_white from '/assets/general/a_white.svg'
import email from '/assets/icons/email.jpg'
import linkedin from '/assets/icons/linkedin.jpg'
import twitter from '/assets/icons/twitter.jpg'
import styles from './index.module.scss'
import BorderedButton from "../../Common/BorderedButton";
import FullButton from "../../Common/FullButton";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate()
    return (
        <Layout>
          <span className="flex items-end font-integral font-bold text-5xl">
            <img src={A} className="h-[2.3rem] pr-[1px] mb-[1px]"/>
            NTON
          </span>
          <div className="flex-col pt-16" id={styles.hi_titles_wrapper}>
            <div className="flex items-start flex-nowrap">
              <h1 className="font-integral font-bold text-5xl">
                👋 HI! I'M  
              </h1>
              <div className="flex flex-nowrap bg-mainPurple ml-5 mt-[-0.8rem] rounded-2xl w-[230px] h-[84px] relative">
                <img src={A_white} className="h-9 pr-[3px] absolute" id={styles.a_white}/>
                <span className="text-5xl font-bold font-integral text-white absolute" id={styles.nton_white}>NTON</span>
              </div>
            </div>
            <h1 className="font-integral font-bold text-5xl pt-4">
              FULL-STACK DEVELOPER
            </h1>
          </div>
          <p className="font-display font-normal text-3xl max-w-2xl pt-12 leading-relaxed">
            As a developer, I have a strong passion for creating elegant and efficient solutions to complex problems, while learning in real time. I have 4 years of experience in Front and Back development.
          </p>
          <div className="flex pt-20">
            <FullButton onClick={() => navigate('/aboutMe')} title='About Me' marginRight={'1.5rem'}/>
            <BorderedButton onClick={() => navigate('/portfolio')} title='See Portfolio'/>
          </div>
          <div className="flex items-center pt-9">
            <span className="text-[#323232] font-display font-medium
            text-3xl pr-5">Contact me via: </span>
            <img src={email} className="mr-7"/>
            <img src={linkedin} className="mr-7"/>
            <img src={twitter}/>
          </div>
      </Layout>
    )
}
