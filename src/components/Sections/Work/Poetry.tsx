import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';

export default function Poetry() {
    const navigate = useNavigate()
    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/portfolio')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="text-black font-integral font-black text-[55px]">POETRY</h1>
            <p className="max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">Our plant website is a hub for plant enthusiasts and beginners alike.</p>
            <h2 className="pt-16 text-black font-integral font-bold text-4xl">SKILLS:</h2>
            <div className="flex flex-wrap items-center pt-8">
                <ColorBox title={"React JS"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"CSS"} color={"#D14AB9"} bgColor="pink" />
                <ColorBox title={"GSAP"} color={"#EF4D83"} bgColor="pink" />
                <ColorBox title={"TailwindCSS"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"TypeScript"} color={"#D14AB9"} bgColor="pink"  />
            </div>
            <div className={`${styles.img} w-full h-[525px] relative z-50`} 
            style={{backgroundImage:'url(/projects/poetry.png)'}}/>
            <div className="flex justify-center pt-12">
                <FullButton onClick={() => null} title="Live Website" marginRight="2rem"/>
                <BorderedButton onClick={() => null} title="GitHub"/>
            </div>
        </Layout>
    )
}