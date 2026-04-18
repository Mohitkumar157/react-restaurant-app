import icon1 from "../../assets/images/icon-1.svg";
import icon from "../../assets/images/icons-2.svg";
import phoneIcon from "../../assets/images/phone-icon.svg";
import eggsMaggee from "../../assets/images/egg-maggie.webp";
import pasta from "../../assets/images/pasta.webp";
import Button from "../ui/Button";
import { useRef } from "react";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

function FourthSection() {
    const ref = useRef();
   
    
    useGSAP(() => {
        const trigger = {
            trigger: ref.current,
            scroller: "body",
            start: "top 50%",
        }
 
        gsap.from(".left-top", {
            y : 80,
            rotateY: 180,
            duration: 1,
            opacity: 0,
            scrollTrigger: trigger
        });
        gsap.from(".right .egg-maggi" , {
            x : 100,
            opacity : 0,
            duration : 1,
            scrollTrigger : trigger
        })
        gsap.from(".right .pasta" , {
            y :100,
            opacity : 0,
            duration :1,
            scrollTrigger : trigger
        })

        gsap.from(".food-card" , {
            y:100,
            opacity : 0,
            duration : .8,
            scrollTrigger :{
                trigger : ".food-card",
                scroller : "body",
                start : "top 80%",
              
            }
        });

        gsap.from(".left-bottom" , {
            rotateY:180,
            opacity :0,
            duration : 1,
            scrollTrigger : {
                trigger : ".left-bottom",
                start : "top 60%",
               
            }
        })





    }, { scope: ref.current })








    return (
        <div className="section-4">
            <div ref={ref} className="container w-full flex flex-col md:flex-col lg:flex-row justify-between gap-6 md:gap-30 items-center">
                <div className="left lg:w-[45%]">
                    <div className="left-top text-center md:text-start">
                        <h4 className="text-[18px] text-[#b92e2d] font-bold">Delivered Anytime</h4>
                        <h2 className="uppercase luckiest-guy text-[#002922] text-[32px] md:text-[40px] leading-[1.2] tracking-[1px] my-7!">Hungry? Need Combo Meals? Find it all here</h2>
                        <p>From satisfying combos to your all-time favorites, discover meals made fresh to fill your hunger and lift your mood.</p>
                    </div>

                    <div className="food-card flex gap-5 my-12!">
                        <MealCard img={icon1}>
                            Flavor Made <br />with Love
                        </MealCard>
                        <MealCard img={icon}>
                            Delight in <br /> Every Bite
                        </MealCard>

                    </div>
                    <div className="left-bottom flex items-center justify-center md:justify-start gap-6">
                        <Button >Start Order</Button>
                        <div className="phone flex items-center gap-4">
                            <img src={phoneIcon} alt="Phone-image" loading="lazy"/>
                            <h6 className="text-[18px]">888 456 7890</h6>
                        </div>
                    </div>
                </div>

                <div className="right lg:w-[50%] rounded-md relative">
                    <div className="img-wraper w-full ">
                        <img src={eggsMaggee} alt="egg-maggi" className="egg-maggi rounded-md" loading="lazy"/>
                        <div className="hidden md:block pasta absolute min-w-80 top-20 right-80 p-4! rounded-md bg-[#fffaee]">
                            <img src={pasta} alt="pasta" className="rounded-md h-full" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection;



function MealCard({ img, children }) {
    return (
        <div className="border border-[#b92c2d] wraper w-full md:min-w-[36%] text-[18px] flex flex-col justify-center items-start p-5! tracking-[1px] rounded-md gap-5 bg-[#f8efd8]">
            <img src={img} alt={children} loading="lazy"/>
            <p className="luckiest-guy font-bold uppercase">{children}</p>
        </div>
    )
}