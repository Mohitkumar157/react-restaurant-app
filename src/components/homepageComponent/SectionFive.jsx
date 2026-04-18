import shakeGlass from "../../assets/images/glass-of-shake.webp";
import arrowIcon from "../../assets/images/cross-icon.svg";
import rightSideEffect from "../../assets/images/right-side-red-effect.svg";
import bread from "../../assets/images/bread.svg";
import cheese from "../../assets/images/chessess.svg";


import gsap from 'gsap';

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function SectionFive() {
    const ref = useRef();

    useGSAP(() => {

        const trigger = {
            scroller: "body",
            trigger: ref.current,
            start: "top 50%",
        }



        gsap.from(".first", {
            x: -200,
            opacity: 0,
            duration: 1,
            scrollTrigger: trigger
        });


        gsap.from(".second .top", {
            rotateY: 120,
            opacity: 0,
            duration: 1,
            scrollTrigger: trigger
        });

        gsap.from(".section-5 .third", {
            x: 200,
            duration: 1,
            opacity: 0,
            scrollTrigger: trigger
        });

        gsap.to(".bread , .chese", {
            x: 30,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })



    }, { scope: ref.current })



    return (
        <div ref={ref} className='section-5 pb-16!'>
            <div className="container overflow-hidden relative  bg-[#f8efd8] flex flex-col md:flex-row gap-20 items-center w-full rounded-xl">
                <div className="first lg:w-[40%] md:w-[50%]">
                    <img src={shakeGlass} alt=" glass of Shake image" loading="lazy"/>
                </div>

                <div className="second relative lg:w-[40%] md:w-[50%]">
                    <img src={bread} alt="bread-image" className="hidden md:block bread absolute top-[-30%] left-[20%]" loading="lazy"/>
                    <img src={cheese} alt="cheese" className="chese absolute bottom-[-30%] right-[-20%]" loading="lazy"/>
                    <div className="top pb-9! md:pb-0!">
                        <div className="text-center md:text-start">
                            <h4 className="md:text-[18px] text-[#b92e2d] font-bold">Buy 1 get 1</h4>
                            <h2 className="uppercase luckiest-guy text-[#002922] text-[32px] md:text-[40px] leading-[1.2] tracking-[1px] my-7!">The More You Sip, the More You Save</h2>
                            <p className="mb-7!">From satisfying combos to your all-time favorites, discover meals made fresh to fill your hunger and lift your mood.</p>
                        </div>
                        <div className="relative text-center">
                            <div className="wraper flex justify-center items-center md:items-start md:justify-start gap-8">
                                <img src={arrowIcon} alt="cross-arrow-icon" className="rotate-55" loading="lazy"/>
                                <div className="headings">
                                    <h3 className="text-[40px] text-[#b92e2d]">Get 10% Off!</h3>
                                    <h3 className="text-[#b92e2d]">Download the App Today</h3>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="hidden third lg:w-[20%] absolute right-0 top-0 lg:top-[20%] md:flex md:justify-end">
                    <img src={rightSideEffect} alt="ref-effect-image" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default SectionFive