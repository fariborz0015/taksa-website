import { ApiConstants } from '@/constants'
import Link from 'next/link'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import useUser from '@/hooks/api-handlers/auth/useUser'
import { landLinkMaker, sortByattantion } from '@/utils/helper'
import VideoPlayer from '@/components/video-player/VideoPlayer'
const LandCardItem = ({ item }) => {
  const { user } = useUser()
  const sortedMedia = sortByattantion({
    mainArray: item.media,
    schemaArray: JSON.parse(item.mediaOrder),
    key: 'uuid',
  })

  // console.table({ sortedMedia, media: item.media, mediaOrder: item.mediaOrder })
  return (
    <a
      href={landLinkMaker({ token: user.token, landUuid: item?.uuid })}
      target="_blank"
    >
      <div className="w-full rounded-xl bg-white  ">
        <div className="mx-auto rounded-t-xl    overflow-hidden  flex justify-center items-center   bg-[#e8f3fd] ">
          <Swiper modules={[Navigation]} navigation autoHeight>
            {sortedMedia?.map((medi) => (
              <SwiperSlide key={medi.uuid}>
                {medi.type == 'image' ? (
                  <img
                    src={ApiConstants?.mediaBaseUrl + medi?.uuid}
                    className="h-[231px]"
                    alt=""
                  />
                ) : (
                  <VideoPlayer
                    src={ApiConstants?.mediaBaseUrl + medi?.uuid}
                    className="  bg-black"
                    height={'230px'}
                    controls
                  />
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
