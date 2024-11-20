import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carrossel = ({ children, ...props }) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            {...props}
        >
            {children}
        </Swiper>
    )
}

export default Carrossel