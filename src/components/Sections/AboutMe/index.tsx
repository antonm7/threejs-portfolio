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
            <h1 className="responsive_title text-black font-integral font-black text-[55px]">ANTON MIGOLKO</h1>
            <div className="bg-mainPurple flex justify-center items-center
            text-white font-display font-medium text-2xl max-w-xs h-16 rounded-lg mt-8">
                Full-Stack Developer
            </div>
            <h2 className="responsive_subTitle pt-16 text-black font-integral  font-bold text-4xl">ABOUT ME:</h2>
            <div className="responsive_para pr-12 max-w-3xl text-[#323232] font-display text-2xl pt-6 leading-relaxed">
                <p>
                    Im a fulltack developer located in Israel. I started learning web programming about 6 years ago on my own.
                </p>
                <p className="pt-4">
                    I am very organized person, problem solver, love to take challenges and
                    love to collaborate and work with other developers.
                </p>
                <p className="pt-4">
                    When I'm not sitting in front of the computer I like to travel, run in the sea or read a good book.
                </p>
            </div>
            <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">SKILLS:</h2>
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

