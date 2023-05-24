import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'

const initioalSetting = {
  slidesPerView: 1.6,
  
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
 
    },
  },
}
const Slider = ({
  options = initioalSetting,
  items,
  ItemComponent,
  dataKeyProps = 'item',
}) => {
  return (
    <Swiper
      pagination={false}
      navigation={true}
      height={'100%'}
      //TODO: need to fix
 
      modules={[Pagination, Navigation]}
 
      {...{ ...initioalSetting, ...options }}
    >
      {items.map((item, index) => (
        <SwiperSlide className="!bg-transparent" key={index}>
          <ItemComponent {...{ [dataKeyProps]: item }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
