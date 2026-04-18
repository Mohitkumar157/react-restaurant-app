import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import pizza from "../../assets/images/pizza.webp";
import popCorn from "../../assets/images/popcorn.webp";
import pastrees from "../../assets/images/pastree.webp";
import kfcChicken from "../../assets/images/kfc-legs.webp";
function MenuSlider() {
  return (
    <div className='py-16! text-center'>
      <Swiper
       className='overflow-hidden'
        modules={[Autoplay,]}
        spaceBetween={10}
        loop={true}
        speed={7000}
        autoplay={{ delay: 0, disableOnInteraction: false, }}
        allowTouchMove={false}
        breakpoints={{
          0: {
            slidesPerView: 1, // 👈 mobile
          },
          640: {
            slidesPerView: 2, // 👈 optional (tablet)
          },
          768: {
            slidesPerView: 3, // 👈 desktop
          },
        }}
      >
        <SwiperSlide><img src={pizza} alt="pizza" className='rounded-[10px]' loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src={popCorn} alt="pop-corn" className='rounded-[10px]' loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src={pastrees} alt="pastree" className='rounded-[10px]' loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src={kfcChicken} alt="Chicken Leg" className='rounded-[10px]' loading="lazy"/></SwiperSlide>

      </Swiper>
    </div>
  )
}

export default MenuSlider;