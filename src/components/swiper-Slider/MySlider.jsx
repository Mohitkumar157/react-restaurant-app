import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Navigation } from 'swiper/modules'; // Navigation add kiya arrow ke liye

// CSS Imports
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import slider1 from "../../assets/images/slider-01.webp";
import slider2 from "../../assets/images/slider-2.webp";
import slider3 from "../../assets/images/slider-3.webp";

function MySlider({ setActiveIndex}) {
   
    return (
        <div className="slider-container w-full md:w-[80%]">
            <Swiper
                
                onSlideChange={(item) => setActiveIndex(item.activeIndex)}
                slidesPerView={1}
                effect={'cards'}
                grabCursor={true}
                modules={[Autoplay, EffectCards, Navigation]}
                autoplay={{ delay: 3000 }}
                speed={1500}
                loop={false}
                loopAdditionalSlides={3}

                cardsEffect={{
                    slideShadows: true, // Agar shadow nahi chahiye toh false kar do
                    rotate: false,       // Cards ko tedha hone se rokne ke liye
                    perSlideOffset: 6,   // Piche wale cards ka gap kitna hoga
                    perSlideScale: 0.9,  // Piche wale card kitne chhote dikhenge
                }}
                className="mySwiper"
            >
                <SwiperSlide className="rounded-2xl overflow-hidden">
                    <img src={slider1} alt="" className='w-full h-full object-cover' />
                </SwiperSlide>

                <SwiperSlide className="rounded-2xl overflow-hidden">
                    <img src={slider2} alt="" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="rounded-2xl overflow-hidden">
                    <img src={slider3} alt="" className='w-full h-full object-cover' />
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default MySlider;