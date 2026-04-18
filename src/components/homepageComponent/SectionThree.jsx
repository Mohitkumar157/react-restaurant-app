import burgerImg from "../../assets/images/burger.webp";
import timingLogo from "../../assets/images/timing-logo.svg";
import redEffect from "../../assets/images/red-effect.svg";
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


function SectionThree() {
    const burgerRef = useRef();

    useGSAP(() => {
        const trigger = {
            scroller: "body",
            trigger: burgerRef.current,
            start: "top 70%",
        }
        gsap.from(".burger-image-wraper", {
            x: -200,
            opacity: 0,
            duration: 1,
            scrollTrigger: trigger,
        });
        gsap.from(".burger-label", {
            x: -200,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger : ".burger-label",
                scroller : "body",
                start : "top 60%"
            }
        });



        gsap.from(".section-three .top", {
            rotateY: 120,
            y : 80,
            duration: 1,
            opacity: 0,
            scrollTrigger: trigger
        })
        gsap.from(".bottom", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger : trigger
        })

    }, { scope: burgerRef.current })



    return (
        <div className="section-three pb-16!">
            <div ref={burgerRef} className='container md:flex md:justify-between md:gap-16'>
                <div className="burger-image-wraper md:w-[50%] h-auto rounded-lg overflow-hidden">
                    <img src={burgerImg} alt="burger-image" />
                </div>

                <div className="related-content md:w-[50%] flex flex-col gap-12 justify-center py-6! md:text-start text-center">
                    <div className="top">
                        <h4 className="text-[18px] text-[#b92e2d] font-bold">Food Safety</h4>
                        <h2 className="luckiest-guy text-[#002922] text-[32px] md:text-[40px] leading-[1.2] tracking-[1px] my-7!">Packed with Care & Cleanliness</h2>
                        <p>We follow strict hygiene standards to ensure every meal is prepared fresh, safe, and with utmost care.</p>
                    </div>

                    <div className="bottom md:max-w-fit">
                        <div className="heading flex flex-col items-center md:flex-row gap-4 mb-4! md:justify-start justify-center">
                            <img src={timingLogo} alt="Store Timing" />
                            <h3 className="luckiest-guy text-[#002922] text-[32px] tracking-[1px]">Opening Hours</h3>
                        </div>
                        <div className="daily-timing">
                            <div className="mon-to-Thurs flex justify-between gap-4 mb-4!">
                                <h4 className="luckiest-guy text-[#002922] text-[18px]">Monday to Thursday</h4>
                                <p>(08:00 AM – 06:00 PM)</p>
                            </div>

                            <div className="fri-to-sat flex justify-between mb-4!">
                                <h4 className="luckiest-guy text-[#002922] text-[18px]">Friday & Saturday</h4>
                                <p>(10:00 AM – 08:00 PM)</p>
                            </div>
                            <div className="sun flex justify-between mb-4!">
                                <h4 className="luckiest-guy text-[#002922] text-[18px]">sunday</h4>
                                <p>(10:00 AM – 10:00 PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={redEffect} alt="effect" className="burger-label hidden md:block" loading="lazy"/>
        </div>
    )
}

export default SectionThree