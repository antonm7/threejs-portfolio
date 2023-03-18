import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/FullButton";
import Layout from "../../Layout";
import styles from './index.module.scss';

export default function Auth() {
    const navigate = useNavigate()
    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/portfolio')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="responsive_title text-black font-integral font-black text-[55px]">NextJS Auth With Prisma And Refresh Tokens (JWT)</h1>
            <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">Article I wrote about a authentication I built with usage of refrash and access tokens.</p>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">Tech:</h2>
            <div className="flex flex-wrap items-center pt-8">
                <ColorBox title={"Next JS"} color={"#5F55D2"} bgColor="purple" />
                <ColorBox title={"Prisma"} color={"#DD9516"} bgColor="orange" />
                <ColorBox title={"Zustand"} color={"#D14AB9"} bgColor="pink"  />
                <ColorBox title={"JWT"} color={"#DD9516"} bgColor="orange" />
            </div>
            <div className={`${styles.img} w-full h-[525px] relative z-50`} 
            style={{backgroundImage:'url(/projects/auth.png)'}}/>
            <div className="flex justify-center pt-12">
                <FullButton onClick={() => null} title="Article" marginRight="2rem"/>
                <BorderedButton onClick={() => null} title="GitHub"/>
            </div>
        </Layout>
    )
}