import React, { useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={true}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="/images/offering1.png" alt="slide1" /></SwiperSlide>
      <SwiperSlide><img src="/images/offering1.png" alt="slide2" /></SwiperSlide>
      <SwiperSlide><img src="/images/offering1.png" alt="slide3" /></SwiperSlide>
      <SwiperSlide><img src="/images/offering1.png" alt="slide4" /></SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
