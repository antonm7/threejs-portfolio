import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import SkillBox from "../../Common/SkillBox";
import Layout from "../../Layout";
export default function AboutMe() {
    const navigate = useNavigate()

    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/')} icon={faArrowLeft} className=" z-50 w-6 h-6"/>
            <h1 className="text-black font-integral font-black text-[55px]">ANTON MIGOLKO</h1>
            <div className="bg-mainPurple flex justify-center items-center
            text-white font-display font-medium text-2xl max-w-xs h-16 rounded-lg mt-8">
                Full-Stack Developer
            </div>
            <h2 className="pt-16 text-black font-integral  font-bold text-4xl">ABOUT ME:</h2>
            <p className="pr-12 max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">I have a strong passion for creating  solutions to complex bugs. I have experience in a wide range of technologies, including front and back development</p>
            <h2 className="pt-16 text-black font-integral font-bold text-4xl">SKILLS:</h2>
            <div className="flex flex-wrap pt-10">
                <SkillBox title="Html"/>
                <SkillBox title="Css"/>
                <SkillBox title="Javascript"/>
                <SkillBox title="Typescript"/>
                <SkillBox title="NextJS"/>
                <SkillBox title="ReactJS"/>
                <SkillBox title="Scss"/>
                <SkillBox title="NodeJS"/>
                <SkillBox title="MongoDB"/>
                <SkillBox title="tRPC"/>
                <SkillBox title="TailwindCSS"/>
            </div>
        </Layout>
    )
}

