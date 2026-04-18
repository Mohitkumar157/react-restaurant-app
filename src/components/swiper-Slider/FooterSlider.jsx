import breadImg from "../../assets/images/bread-butter.svg";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

function FooterSlider() {
    return (
        <div className="footer-slider overflow-hidden flex flex-col gap-4! items-center bg-[#b92e2d] py-8!">
            <Swiper
                modules={[Autoplay,]}
                slidesPerView="auto"
                spaceBetween={10}
                loop = {true}
                speed={6000}
                autoplay = {{delay : 0,disableOnInteraction: false,}}
                allowTouchMove = {false}
            >
                <SwiperSlide className="w-fit!">
                    <div className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                        <span className="text-[20px] text-white luckiest-guy">Fresh Food & Cold Drinks</span>
                    </div>
                </SwiperSlide>
                 <SwiperSlide className="w-fit!">
                    <div  className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                         <span className="text-[20px] text-white luckiest-guy">Made Just for You</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-fit!">
                    <div className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                         <span className="text-[20px] text-white luckiest-guy">Love at First Bite</span>
                    </div>
                </SwiperSlide>
                 <SwiperSlide className="w-fit!">
                    <div className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                         <span className="text-[20px] text-white luckiest-guy">Fresh Food & Cold Drinks</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="w-fit!">
                    <div className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                        <span className="text-[20px] text-white luckiest-guy">Made Just for You</span>
                    </div>
                </SwiperSlide>
                 <SwiperSlide className="w-fit!">
                    <div className="flex items-center gap-6">
                        <img src={breadImg} alt="bread" />
                        <span className="text-[20px] text-white luckiest-guy">Love at First Bite</span>
                    </div>
                </SwiperSlide>
                
            </Swiper>
            
        </div>
    )
}

export default FooterSlider