import Layout from "../../Layout";
import Slider from "react-slick";
import Project from "../../Common/Project";
import { useEffect, useReducer, useRef, useState } from "react";
import left from '/assets/general/left.png';
import right from '/assets/general/right.png';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import { useStore } from "../../../store";

const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const visibleReducer = (state:any, action: { type: 'landingPages' | 'fullstack' | 'backend'; }) => {
    switch (action.type) {
        case 'landingPages':
            return {visible:'landingPages'}
        case 'fullstack':
            return {visible:'fullstack'}
        case 'backend':
            return {visible:'backend'}
        default:
            return {visible:'landingPages'}
    }
}

export default function Portfolio() {
    const [visible, setVisible] = useReducer(visibleReducer, {visible:'landingPages'})
    const navigate = useNavigate()
    const slickSlider = useRef<any>(null)
    const store = useStore(state => state)

    useEffect(() => {
        slickSlider?.current?.slickGoTo(0)
    },[visible.visible])

    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="text-black font-integral font-black text-[55px]">MY PORTFOLIO</h1>
            <p className="max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">Some works I have built includes landing pages, fullstack websites and backend code.</p>
            <div className="flex flex-wrap pt-10">
                <button onClick={() => store.setSection('landing')} className="mb-3 mr-3 max-w-80 w-80 h-20 flex justify-center items-center bg-white rounded-lg font-display font-bold text-2xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${store.section === 'landing' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {store.section === 'landing' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    Landing Pages
                </button>
                <button onClick={() => store.setSection('fullstack')} className="mb-3 px-12 max-w-96 h-20 flex justify-center items-center bg-white rounded-lg font-display font-bold text-2xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${store.section === 'fullstack' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {store.section === 'fullstack' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    FullStack Websites
                </button>
                <button onClick={() => store.setSection('backend')} className="mb-3 max-w-80 w-80 h-20 flex justify-center items-center bg-white rounded-lg font-display font-bold text-2xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${store.section === 'backend' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {store.section === 'backend' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    Backend Code
                </button>
            </div>
            <div className="pt-14 relative z-50">
                {store.section === 'landing' ?
                    <Slider {...settings} ref={slickSlider}>
                        <Project to="poetry" title="Poetry Landing Page" img="/projects/poetry.png"/>
                        <Project to="landify" title="Poetry Landing Page" img="/projects/landify.png"/>
                        <Project to="magicEditor" title="Poetry Landing Page" img="/projects/magic.png"/>
                        <Project to="keeper" title="Poetry Landing Page" img="/projects/keeper.png"/>
                    </Slider> :
                    store.section === 'fullstack' ? 
                    <Slider ref={slickSlider} {...settings}>
                        <Project to="gameFevr" title="GameFavr Website" img="/projects/gameFevr.png"/>
                    </Slider> :
                    <Slider ref={slickSlider} {...settings}>
                        <Project to="auth" title="Refresh Tokens Authentication Article" img="/projects/auth.png"/>
                    </Slider>
                }
                <div className="flex justify-center mt-4">
                    <img src={left} onClick={() => slickSlider.current.slickPrev()} className='h-12 mr-2'/>
                    <img src={right} onClick={() => slickSlider.current.slickNext()}  className='h-12'/>
                </div>
            </div>
        </Layout>
    )
}