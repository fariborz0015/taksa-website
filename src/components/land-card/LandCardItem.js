import { ApiConstants } from '@/constants'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import useUser from '@/hooks/api-handlers/auth/useUser'
import { landLinkMaker } from '@/utils/helper'
const LandCardItem = ({ item }) => {
  const { user } = useUser()
 
  return (
    <a href={landLinkMaker({ token: user.token, landUuid: item?.uuid })} target="_blank">
      <div className="w-full rounded-xl bg-white min-h-[250px] ">
        <div className="mx-auto rounded-t-xl    overflow-hidden  flex justify-center items-center   bg-[#e8f3fd] ">
          <Swiper modules={[Navigation]} navigation>
            {item?.media?.map((medi) => (
              <SwiperSlide>
                {medi.type == 'image' ? (
                  <img src={ApiConstants?.mediaBaseUrl + medi?.uuid} alt="" />
                ) : (
                  <video
                    src={ApiConstants?.mediaBaseUrl + medi?.uuid}
                    className="min-h-[411px] bg-black"
                    height="100%"
                    controls
                  ></video>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="p-8">
          <div className="text-black mt-2 font-bold text-lg mx-auto text-right w-full  ">
            {item.title}
          </div>
          <p className="  text-caption mt-2">{item.description}</p>
        </div>
      </div>
    </a>
  )
}

export default LandCardItem
