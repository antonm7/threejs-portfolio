import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';
import Login from '/projects/gameFevr/login.png';
import Game from '/projects/gameFevr/game.png';
import Home from '/projects/gameFevr/home.png';
import Profile from '/projects/gameFevr/profile.png';
 
export default function GameFevr() {
    const navigate = useNavigate()
    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/portfolio')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="responsive_title text-black font-integral font-black text-[55px]">Game Fevr</h1>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">
                Searching games by filters like release year, genre, platform.
                Design made by top designer and provided via zeplin. <br />
            </p>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">
                Some features this website includes: <br />
                <ul className="pl-2">
                    <li className="">- Register and login authentication</li>
                    <li>- Reset Password with email via SendGrid</li>
                    <li>- Visit and rank other users</li>
                    <li>- Post reviews on games</li>
                    <li>- Animations</li>
                    <li>- Rate game</li>
                </ul>
            </p>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">SKILLS:</h2>
            <div className="flex flex-wrap items-center pt-8">
                <ColorBox title={"Next JS"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"SCSS"} color={"#D14AB9"} bgColor="pink" />
                <ColorBox title={"GSAP"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"TailwindCSS"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"TypeScript"} color={"#D14AB9"} bgColor="pink"  />
                <ColorBox title={"Mongo DB"} color={"#5F55D2"} bgColor="purple"  />
                <ColorBox title={"SendGrid"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"Next Auth"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"Zustand"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"Express JS"} color={"#EF4D83"} bgColor="pink" />
            </div>
            {/* <div className={`${styles.img} w-full h-[525px] relative z-50`} 
            style={{backgroundImage:'url(/projects/gameFevr.png)'}}/> */}
            <div className={`w-full table ${styles.table_wrapper}`}>
                <div className="w-2/4 float-left pr-2">
                    <img src={Game} className="w-full"/>
                </div>
                <div className="w-2/4 float-right">
                    <img src={Login} className="w-full"/>
                    <img src={Home} className="w-full pt-4"/>
                    <img src={Profile} className="w-full pt-4"/>
                </div>
            </div>
            <div className="flex justify-center pt-12">
                <FullButton onClick={() => null} title="Live Website" marginRight="2rem"/>
                <BorderedButton onClick={() => null} title="GitHub"/>
            </div>
        </Layout>
    )
}