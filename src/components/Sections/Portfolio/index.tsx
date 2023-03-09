import Layout from "../../Layout";
import Slider from "react-slick";
import Project from "../../Common/Project";
import { useEffect, useReducer, useRef, useState } from "react";
import left from '/assets/general/left.png';
import right from '/assets/general/right.png';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

const settings = {
    dots: false,
    arrows:false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

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

    useEffect(() => {
        slickSlider?.current?.slickGoTo(0)
    },[visible.visible])


    return (
        <Layout>
            <FontAwesomeIcon onClick={() => navigate('/')} icon={faArrowLeft} className="z-50 w-6 h-6"/>
            <h1 className="text-black font-integral font-black text-[55px]">MY PORTFOLIO</h1>
            <p className="max-w-3xl text-[#323232] font-display text-3xl pt-6 leading-relaxed">Some works I have built includes landing pages, fullstack websites and backend code.</p>
            <div className="flex flex-wrap pt-10">
                <button onClick={() => setVisible({type:'landingPages'})} className="mb-3 mr-3 max-w-80 w-80 h-24 flex justify-center items-center bg-white rounded-lg font-display font-bold text-3xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${visible.visible === 'landingPages' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {visible.visible === 'landingPages' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    Landing Pages
                </button>
                <button onClick={() => setVisible({type:'fullstack'})} className="px-6 max-w-96 h-24 flex justify-center items-center bg-white rounded-lg font-display font-bold text-3xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${visible.visible === 'fullstack' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {visible.visible === 'fullstack' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    FullStack Websites
                </button>
                <button onClick={() => setVisible({type:'backend'})} className="max-w-80 w-80 h-24 flex justify-center items-center bg-white rounded-lg font-display font-bold text-3xl">
                    <div className={`mr-5 w-7 h-7 p-1 border-2 ${visible.visible === 'backend' ? 'border-[#30C952]' : 'border-[#D9D9D9]'} rounded-full`}>
                        {visible.visible === 'backend' ? <div className="w-full h-full bg-[#30C952] rounded-full"></div> : null}
                    </div>
                    Backend Code
                </button>
            </div>
            <div className="pt-14 relative z-50">
                {visible.visible === 'landingPages' ?
                    <Slider {...settings} ref={slickSlider}>
                        <Project to="poetry" title="Poetry Landing Page" img="/projects/poetry.png"/>
                        <Project to="landify" title="Poetry Landing Page" img="/projects/landify.png"/>
                        <Project to="magicEditor" title="Poetry Landing Page" img="/projects/magic.png"/>
                        <Project to="keeper" title="Poetry Landing Page" img="/projects/keeper.png"/>
                    </Slider> :
                    visible.visible === 'fullstack' ? 
                    <Slider ref={slickSlider} {...settings}>
                       
                    </Slider> :
                    <Slider ref={slickSlider} {...settings}>
                       
                    </Slider>
                }
                <div className="flex justify-center mt-4">
                    <img src={left} className='h-12 mr-2'/>
                    <img src={right} className='h-12'/>
                </div>
            </div>
        </Layout>
    )
}