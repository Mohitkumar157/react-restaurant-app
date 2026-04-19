import Button from "../ui/Button"
import headingIcon from '../../assets/images/heading-icon.svg';
import HeroBottom from "../layout/header/HeroBottom";
import plateCircle from '../../assets/images/circle.svg';
import plate from '../../assets/images/kabab.webp';
import leftChocoBalls from '../../assets/images/choco-ball.webp';
import rightChocoBalls from '../../assets/images/right-side-choco-balls.webp';
import topLeaf from '../../assets/images/leaf.webp';
import carvedLeaf from '../../assets/images/carved-leaf.webp';
import chilli from '../../assets/images/chilli-slice.webp';
import { useRef } from "react";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function HeroSection() {
    const headingImgRef = useRef();
    const plateOutlineref = useRef();
    const plateRef = useRef();
    const discountRef = useRef();
    const heroRef = useRef();

    useGSAP((_, contextSafe) => {
        gsap.from(headingImgRef.current, {
            y: 90,
            x: 90,
            opacity: 0,
            scale: 0,
            duration: .7,
        })



        const tl = gsap.timeline();

        tl.to(plateOutlineref.current, {
            rotate: 180,
            duration: .7,

        })
        tl.to(plateRef.current, {
            rotate: 45,
            duration: 1.5,
            ease: "power4.out",
        })


        gsap.to(plateRef.current, {
            rotate: 90,
            scrollTrigger: {

                scroller: "body",
                start: "top 80%",
                end: "top 0%",
                scrub: 3,
                trigger: plateRef.current,

            }
        })


        gsap.from(discountRef.current, {
            x: "-80%",
            y: "80%",
            scale: 0,
            opacity: 0,
            duration: .7,
            scrollTrigger: {
                trigger: discountRef.current,
                scroller: "body",
                start: "top 80%",
            }
        })


        const handlerMouseMove = contextSafe((e) => {
        
            const x = gsap.utils.clamp(-20, 20, (e.clientX - window.innerWidth / 2) / 30);
            const y = gsap.utils.clamp(-20, 20, (e.clientY - window.innerHeight / 2) / 30);
            gsap.to(".moving-item", {
                x: x,
                y: y,
                duration: 2,
                ease: "power4.out"
            })
        });


      




        heroRef.current.addEventListener("mousemove", handlerMouseMove)
        return () => {
            heroRef.current.removeEventListener("mousemove", handlerMouseMove);
        }
    });


    return (
        <div ref={heroRef} className='flex justify-center hero-section bg-[url("/public/hero-v2-bg.svg")] w-full max-h-250 bg-cover bg-no-repeat overflow-hidden relative'>
            <div className="container sm: px-4!">
                <div className="text-center pt-16!">
                    <div className="wraper relative w-fit mx-auto! my-0">
                        <img src={topLeaf} loading="lazy" alt="leaf" className="hidden md:block moving-item max-w-50 absolute top-[30%] -left-[30%] rotate-240 blur-[10px]" />
                        <span className="text-[18px] font-extrabold text-[#b92c2d]">Delivered Anytime</span>
                        <h1 className="text-[36px] md:text-[64px] text-[#002922] py-6! font-bold leading-[1.2] luckiest-guy tracking-[1px]">Your Daily Essentials, <br />Delivered Fast.</h1>
                        <div className="hidden md:block heading-icon w-16.25 h-auto absolute top-0 -left-17.5 max-[950px]:-left-15">
                            <img ref={headingImgRef} src={headingIcon} alt="heading-icon" className="w-full h-auto" loading="lazy"/>
                        </div>
                        <Button>Taste It Today</Button>
                    </div>
                    <div className='hero-bottom-bg wraper absolute z-2 left-0 bottom-0 bg-[url("/public/bg-wall.webp")] w-full h-62 bg-bottom bg-cover'>

                    </div>
                   
                </div>
                <div className="plate-area relative flex justify-center items-center mt-16!">
                    <div className="plate w-fit h-auto relative">
                        <img ref={plateOutlineref} src={plateCircle} alt="outline" className="gola w-full max-w-248.75" loading="lazy"/>
                        <img ref={plateRef} src={plate} alt="kabab-tikka" className="sm: px-3! max-[949px]:left-0 w-full max-w-232 absolute top-7 left-9 z-10" loading="lazy"/>
                        <div ref={discountRef} className="hidden discount-label luckiest-guy bg-[url('/public/discount-label.svg')] bg-cover md:flex md:flex-col md:justify-center md:items-center Luckiest Guy text-[18px] leading-none absolute -top-25 -right-3 w-full max-w-50 h-37.5">

                            <p className="luckiest-guy -rotate-12">up to </p>
                            <p className="luckiest-guy text-[46px] text-[#b92c2d] -rotate-12"> 40%</p>
                            <p className="luckiest-guy -rotate-12 w-[60%] text-right">off</p>
                        </div>
                        <div className="blur-images ">
                            <img src={chilli} alt="chilli-slice" className="hidden md:block moving-item w-25 h-25 absolute top-0 blur-[10px]" loading="lazy"/>
                            <img src={carvedLeaf} alt="green-leaf" className="hidden md:block moving-item w-25 h-25 absolute top-[10%] -right-[5%] blur-[10px]" loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block moving-item choco-balls absolute max-w-30 left-20 z-10 bottom-[5%] "> <img src={leftChocoBalls} alt="choco-barries" className="w-full" loading="lazy"/></div>
                <div className="hidden md:block moving-item choco-balls absolute max-w-30 right-20 z-10 bottom-[5%]"><img src={rightChocoBalls} alt="choco-barries" loading="lazy"/></div>
            </div>
        </div>
    )
}

export default HeroSection