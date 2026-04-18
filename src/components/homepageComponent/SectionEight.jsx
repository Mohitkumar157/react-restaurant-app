import { useRef, useState } from 'react'
import heartImg from "../../assets/images/heartDispay.svg";
import MySlider from '../swiper-Slider/MySlider';
import slider1 from "../../assets/images/slider-01.webp";
import slider2 from "../../assets/images/slider-2.webp";
import slider3 from "../../assets/images/slider-3.webp";
import rating4 from "../../assets/images/rating-4.svg";
import rating5 from "../../assets/images/rating-5.svg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function SectionEight() {
    const ref = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            id: 1,
            image: slider1,
            relatedContent: { rating: { image: rating4, number: "4.0" }, name: "Fried chicken", about: "Crispy outside, juicy inside — pure fried chicken bliss.", price: "₹499" }
        },
        {
            id: 2,
            image: slider2,
            relatedContent: { rating: { image: rating5, number: "5.0" }, name: "chocolate fudge cake ", about: "Rich, moist chocolate fudge cake, pure melt in your mouth indulgence.", price: "₹799" }
        },
        {
            id: 3,
            image: slider3,
            relatedContent: { rating: { image: rating5, number: "5.0" }, name: "Hot sandwiches ", about: "toasted to perfection, loaded with flavor in every bite.", price: "₹99" }
        }
    ]


    useGSAP(() => {
        gsap.from(".item-name h2", {
            y: 80,
            opacity:0,
            duration: 1
        });
         gsap.from(".about-item p", {
            y: 80,
            opacity:0,
            duration: 1
        })
          gsap.from(".item-price h2", {
            y: 80,
            opacity:0,
            duration: 1
        })
         gsap.from(".rating-section .rating-content", {
            y: 80,
            opacity:0,
            duration: 1
        })

    }, {
        scope: ref.current,
        dependencies: [activeIndex],
        revertOnUpdate: true
    })
    return (
        <div ref={ref} className='slider-section w-full'>
            <div className="container flex flex-col md:flex-row gap-6 w-full h-full pb-16!">

                <div className="left p-4! lg:w-[50%] md:w-[50%] bg-[#f8efd8] md:p-11! rounded-xl">
                    <div className="static-content">
                        <img src={heartImg} alt="frame" loading="lazy"/>
                        <h4 className='my-6!'>Special Offers</h4>
                        <h2 className='text-[32px] md:text-[40px]'>Customer Favorites You Can’t Miss</h2>
                    </div>

                    <div className="dynamice-content mt-12!">
                        <div className="rating-section mb-4! overflow-hidden">
                           <div className="rating-content flex gap-3">
                             <img src={slides[activeIndex].relatedContent.rating.image} alt={slides[activeIndex].relatedContent.name} loading="lazy"/>
                            <h2>{slides[activeIndex].relatedContent.rating.number}</h2>
                           </div>
                        </div>
                        <div className="about">
                            <div className="item-name overflow-hidden mb-4!"> <h2 className=' text-[24px]'>{slides[activeIndex].relatedContent.name}</h2></div>
                            <div className="about-item overflow-hidden mb-4!"> <p className=''>{slides[activeIndex].relatedContent.about}</p></div>
                            <div className="item-price overflow-hidden">  <h2 className='text-[32px]'>{`Only - ${slides[activeIndex].relatedContent.price}`}</h2></div>
                        </div>
                    </div>
                </div>

                <div className="right lg:w-[50%] md:w-[50%] flex justify-center">
                    <MySlider setActiveIndex={setActiveIndex} />
                </div>
            </div>
        </div>
    )
}

export default SectionEight;