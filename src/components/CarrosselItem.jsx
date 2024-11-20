import React from 'react'
import { SwiperSlide } from 'swiper/react'

const CarrosselItem = ({ children, ...props }) => {
    return (
        <SwiperSlide {...props}>{children}</SwiperSlide>
    )
}

export default CarrosselItem