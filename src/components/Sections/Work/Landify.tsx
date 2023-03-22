import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/Buttons/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/Buttons/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';
import Bg from '/projects/landifyFull.png'
import { useStore } from "../../../store";
import { useEffect } from "react";


export default function Landify() {
    const navigate = useNavigate()
    const updateLocation = useStore(state => state.updateLocation)
    
    useEffect(() => {
        updateLocation('/work')
    },[])
    
    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/portfolio')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="responsive_title text-black font-integral font-black text-[55px]">Landify</h1>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">Responsive landing page with animations.<br /> Created pixel perfect landing page from figma design.</p>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">TECH:</h2>
            <div className="flex flex-wrap items-center pt-8">
                <ColorBox title={"React JS"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"CSS"} color={"#D14AB9"} bgColor="pink" />
                <ColorBox title={"GSAP"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"TailwindCSS"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"TypeScript"} color={"#D14AB9"} bgColor="pink"  />
            </div>
            <img alt="Landify screenshot" src={Bg} className="w-full relative z-50"/>
            <div className={`${styles.bottom} flex justify-center pt-12`}>
                <a href="https://landifypage.netlify.app/" target="_blank">
                    <FullButton onClick={() => null} title="Live Website" marginRight="2rem"/>
                </a>
                <a href="https://github.com/antonm7/landing-page-landify" target="_blank">
                    <BorderedButton onClick={() => null} title="GitHub"/>
                </a>
            </div>
        </Layout>
    )
}