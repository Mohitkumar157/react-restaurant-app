import chikenLegs from "../../assets/images/chiken-legs.webp";
import priceBg from "../../assets/images/price-bg.svg";
import leafImg from "../../assets/images/leaf.webp";
import { useRef } from "react"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function AboutMenu() {
    const firstdight = ["0", "1", "2"];
    const secondDight = ["3", "2", "1", "0"];
    const thirdDigit = ["0" , "1" , "2" , "3" , "4", "5"];
    const fourthDigit = [ "6" , "5" , "4" , "3", "2" ,"1"];
    const firstNum = firstdight.map((item , i) => {

        return <span key = {i}>{item}</span>;
    });
    const secondNum = secondDight.map((item , i) => {
        return <span key={i}>{item}</span>;
    })
    const thirdNum  = thirdDigit.map((item , i) =>{
        return <span key = {i}>{item}</span>
    });
    const fourthNum = fourthDigit.map((item , i) =>{
        return <span key = {i}>{item}</span>
    })


    const ref = useRef()

    useGSAP((_, contextSafe) => {

        gsap.from(".price-tag", {
            scale: 0,
            duration: 1,
        });
        gsap.to(".first-dight" , {
            y:"-180%",
            duration: 1.5,
             ease: "expo.out"

        });
        gsap.from(".second-digit" , {
            y:"-180%",
            duration :1.5,
             ease: "expo.out"
        });
         gsap.to(".third-digit" , {
            y:"-450%",
            duration: 3,
             ease: "expo.out"

        });
         gsap.from(".fourth-digit" , {
            y:"-450%",
            duration: 3,
             ease: "expo.out"

        });


        const handlerMove = contextSafe((e) => {
            const x = gsap.utils.clamp(-20, 20, (e.clientX - window.innerWidth / 2) / 30);
            const y = gsap.utils.clamp(-20, 20, (e.clientY - window.innerHeight / 2) / 30);
            gsap.to(".moving-item", {
                x: x,
                y: y,
                duration: 2,
                ease: "power4.out"
            })
        })

        ref.current.addEventListener("mousemove", handlerMove)
        return () => {
            ref.current.removeEventListener("mousemove", handlerMove);
        }

    }, { scope: ref.current })
    return (
        <div ref={ref} className='py-16! md:py-0 about-us bg-[url("/public/green-shadow.webp")] w-full! md:h-screen flex items-center bg-no-repeat bg-cover'>
            <div className="container w-full flex flex-col md:flex-row justify-between items-center gap-16">

                <div className="left md:w-[50%] relative">
                    <div className="leaf max-w-30 rotate-220 absolute -top-12.5 md:-top-22.5 right-0 blur-xs"><img src={leafImg} alt="green-leaf" className="moving-item" /></div>
                    <h4 className="text-center md:text-start">Our Special Menu</h4>
                    <h1 className='leading-[1.1] md:leading-none text-center md:text-start text-[64px] border-b border-[#ccc] pb-4!'>Delicious Deals in One Click</h1>
                    <div className="daily-orders flex justify-center items-center md:justify-start gap-6">
                        <div className="box">
                            <h6 className='text-[60px] text-[#b92e2d] flex overflow-hidden h-25'>

                                <div className="first-dight flex flex-col">{firstNum}</div>
                                <div className="second-digit flex flex-col">{secondNum}</div>

                            </h6>
                            <h6>Daily Orders</h6>
                        </div>

                        <div className="box">
                            <h6 className='text-[60px] text-[#b92e2d] flex overflow-hidden h-25'>
                                <div className="third-digit flex flex-col">{thirdNum}</div>
                                <div className="fourth-digit flex flex-col">{fourthNum}</div>
                                +
                            </h6>
                            <h6>Items Available</h6>
                        </div>

                    </div>
                </div>

                <div className="right md:w-[50%] relative">
                    <div className="cheken-legs">
                        <img src={chikenLegs} alt="chiken-legs" className="moving-item" />
                        <div className="price-tag absolute top-[25%] max-w-30 flex justify-center items-center">
                            <img src={priceBg} alt="price-label" />
                            <div className="price absolute">
                                <p className='text-[18px] luckiest-guy text-[white] text-center'>Price</p>
                                <p className='luckiest-guy text-[white] text-[28px]'>₹499</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMenu;