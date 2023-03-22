import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/Buttons/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/Buttons/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';
import Login from '/projects/gameFevr/login.png';
import Game from '/projects/gameFevr/game.png';
import Home from '/projects/gameFevr/home.png';
import Profile from '/projects/gameFevr/profile.png';
import { useStore } from "../../../store";
import { useEffect } from "react";
 
export default function GameFevr() {
    const navigate = useNavigate()

    const updateLocation = useStore(state => state.updateLocation)
    
    useEffect(() => {
        updateLocation('/work')
    },[])
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
                <ul className="pl-2 pt-2">
                    <li className="pt-4"><span className="underline"> Register and login authentication</span> - created with NextAuth (now called Auth.js)</li>
                    <li className="pt-4"><span className="underline">Reset Password with email via SendGrid</span> - user can write his email, then on the backend
                    it generates a link available only for him that gets send to his email. 
                    The link navigates the user to a reset password form.</li>
                    <li className="pt-4"><span className="underline">Visit and rank other users</span> - in the website users can visit other user profiles and hype them (adds points to each user). The hype rank is getting increased based on user activity in the website.</li>
                    <li className="pt-4"><span className="underline">Post reviews on games</span> - users can post their review on any game, other users can view the review, like or dislike the review.</li>
                    <li className="pt-4"><span className="underline">Animations</span> - created some animations with react-lottie (created in animation software) and some animations created with gsap.</li>
                    <li className="pt-4"><span className="underline">Rate game</span> - any user can rate the game, and change his rating any time he want!</li>
                </ul>
            </p>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">TECH:</h2>
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
            <div className={`${styles.bottom} flex justify-center pt-12`}>
                <a href="https://www.gamefevr.com/" target="_blank">
                    <FullButton title="Live Website" marginRight="2rem"/>
                </a>
                <a href="https://github.com/antonm7/gamefevr-website-client" target="_blank">
                    <BorderedButton title="GitHub"/>
                </a>
            </div>
        </Layout>
    )
}