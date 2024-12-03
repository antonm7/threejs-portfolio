import Layout from "../../Layout";
import email from "/assets/icons/email.webp";
import github from "/assets/icons/github.png";
import linkedin from "/assets/icons/linkedin.png";
import styles from "./index.module.scss";
import BorderedButton from "../../Common/Buttons/BorderedButton";
import FullButton from "../../Common/Buttons/FullButton";
import { useStore } from "../../../store";
import { Link } from "react-router-dom";
import Project from "../../Common/Project";
import SkillBox from "../../Common/SkillBox";

export default function Home() {
  const setEmail = useStore((store) => store.setEmail);
  return (
    <Layout>
      {/* <PurpleWrapper /> */}
      <div className="flex-col" id={styles.hi_titles_wrapper}>
        <div className="flex items-center justify-start pb-6">
          <img
            onClick={() => setEmail(true)}
            src={email}
            className={`${styles.icon} unselectable cursor-pointer h-4 mr-4 unselectable`}
          />
          <a href="https://github.com/antonm7" target="_blank">
            <img
              src={github}
              loading="lazy"
              className={`${styles.icon} h-5 cursor-pointer mr-4 unselectable`}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anton-migolko-6a305033b/"
            target="_blank"
          >
            <img
              src={linkedin}
              loading="lazy"
              className={`${styles.icon} h-5 cursor-pointer unselectable`}
            />
          </a>
        </div>
        <h1 className="responsive_title font-integral font-bold leading-snug">
          👋 HI! THATS MY PORTFOLIO
        </h1>
      </div>
      <p className="responsive_para font-display font-normal text-3xl max-w-2xl pt-12 leading-loose">
        {/* I'm Anton, a 21-year-old full-stack junior developer from Israel. <br />
        Passionate about coding and love to learn new technologies, I find joy
        in bringing ideas to life through development. I am dedicated to improve
        my skills and staying updated with the latest industry trends. */}
      </p>
      <div className="flex flex-wrap flex-row" id={styles.prject_holder}>
        <div className="pr-4">
          <Project to="Savvy" title="Savvy App" img="/projects/app.png" />
        </div>
        <div className="pr-4">
          <Project
            to="auth"
            title="Refresh Tokens Authentication Article"
            img="/projects/auth.png"
          />
        </div>
        <div className="pr-4">
          <Project
            to="magicEditor"
            title="Magic Editor Landing Page"
            img="/projects/magic.jpg"
          />
        </div>
        <Project
          to="poetry"
          title="Poetry Landing Page"
          img="/projects/poetry.jpg"
        />
      </div>
      <h2 className="responsive_subTitle pt-4 text-black font-integral font-bold text-4xl">
        SKILLS:
      </h2>
      <div className="flex flex-wrap pt-10">
        <SkillBox title="Html" />
        <SkillBox title="Css" />
        <SkillBox title="Javascript" />
        <SkillBox title="Typescript" />
        <SkillBox title="NextJS" />
        <SkillBox title="ReactJS" />
        <SkillBox title="Scss" />
        <SkillBox title="NodeJS" />
        <SkillBox title="MongoDB" />
        <SkillBox title="tRPC" />
        <SkillBox title="TailwindCSS" />
      </div>
      {/* <div className="flex pt-16" id={styles.buttons_wrapper}>
        <Link to={"/portfolio"}>
          <BorderedButton marginRight={"1.5rem"} title="See Portfolio" />
        </Link>
        <Link to={"/aboutMe"}>
          <FullButton title="About Me" marginRight={"1.5rem"} />
        </Link>
      </div> */}
    </Layout>
  );
}
