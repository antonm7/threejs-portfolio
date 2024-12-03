import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import BorderedButton from "../../Common/Buttons/BorderedButton";
import ColorBox from "../../Common/ColorBox";
import FullButton from "../../Common/Buttons/FullButton";
import Layout from "../../Layout";
import styles from "./index.module.scss";
import Game from "/projects/app.png";
import Home from "/projects/app2.png";
import Profile from "/projects/app3.png";
import PdfButton from "../../Common/PdfButton";

export default function Savvy() {
  const navigate = useNavigate();

  return (
    <Layout>
      <FontAwesomeIcon
        onClick={() => navigate("/home")}
        icon={faArrowLeft}
        className="z-50 w-6 h-6"
      />
      <h1 className="responsive_title text-black font-integral font-black">
        Savvy Path App
      </h1>
      <PdfButton path="/projects/gameFevr/savvy.pdf" />
      <p className="responsive_para max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">
        Mobile app developed for IOS. With Savvy, managing your finances becomes
        not just easy but genuinely enjoyable. Whether you're budgeting for your
        dreams, keeping track of daily expenses, or planning for a secure
        future, Savvy is your ultimate financial companion. <br />
      </p>

      <h2 className="responsive_subTitle pt-16 text-black font-integral font-bold text-4xl">
        TECH:
      </h2>
      <div className="flex flex-wrap items-center pt-8">
        <ColorBox title={"React Native"} color={"#5F55D2"} bgColor="purple" />
        <ColorBox title={"Express"} color={"#D14AB9"} bgColor="pink" />
        <ColorBox title={"Bun"} color={"#EF4D83"} bgColor="pink" />
        <ColorBox title={"Mongo DB"} color={"#DD9516"} bgColor="orange" />
        <ColorBox title={"TypeScript"} color={"#D14AB9"} bgColor="pink" />
        <ColorBox title={"Resend"} color={"#EF4D83"} bgColor="pink" />
        <ColorBox title={"AWS"} color={"#DD9516"} bgColor="orange" />
        <ColorBox title={"Docker"} color={"#5F55D2"} bgColor="purple" />
        <ColorBox title={"Zustand"} color={"#EF4D83"} bgColor="pink" />
      </div>
      <div className={`w-full table ${styles.table_wrapper}`}>
        <div className="w-2/4 float-left pr-2">
          <img src={Game} className="w-full" />
        </div>
        <div className="w-2/4 float-right">
          <img src={Home} className="w-full" />
        </div>
        <div className="w-2/4">
          <img src={Profile} className="w-full pt-4" />
        </div>
      </div>
      <div className={`${styles.bottom} flex justify-center pt-12`}>
        <a
          href="https://apps.apple.com/us/app/savvy-path/id6479574345"
          target="_blank"
        >
          <FullButton title="App Link" marginRight="2rem" />
        </a>
        {/* <a
          href="https://github.com/antonm7/gamefevr-website-client"
          target="_blank"
        >
          <BorderedButton title="GitHub" />
        </a> */}
      </div>
    </Layout>
  );
}
