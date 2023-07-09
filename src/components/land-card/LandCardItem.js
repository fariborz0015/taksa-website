// import { ApiConstants } from '@/constants'
// import Link from 'next/link'
// import React from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import { Navigation } from 'swiper'
// import useUser from '@/hooks/api-handlers/auth/useUser'
// import { landLinkMaker, sortByattantion } from '@/utils/helper'
// import VideoPlayer from '@/components/video-player/VideoPlayer'
// const LandCardItem = ({ item }) => {
//   const { user } = useUser()
//   const sortedMedia = sortByattantion({
//     mainArray: item.media,
//     schemaArray:  item.media,//JSON.parse(item.mediaOrder),
//     key: 'uuid',
//   })

//   // console.table({ sortedMedia, media: item.media, mediaOrder: item.mediaOrder })
//   return (
//     <a
//       href={landLinkMaker({ token: user.token, landUuid: item?.uuid })}
//       target="_blank"
//     >
//       <div className="w-full rounded-xl bg-white  ">
//         <div className="mx-auto rounded-t-xl    overflow-hidden  flex justify-center items-center   bg-[#e8f3fd] ">
//           <Swiper modules={[Navigation]} navigation autoHeight>
//             {sortedMedia?.map((medi) => (
//               <SwiperSlide key={medi.uuid}>
//                 {medi.type == 'image' ? (
//                   <img
//                     src={ApiConstants?.mediaBaseUrl + medi?.uuid}
//                     className="sm:h-[231px]"
//                     alt=""
//                   />
//                 ) : (
//                   <VideoPlayer
//                     src={ApiConstants?.mediaBaseUrl + medi?.uuid}
//                     className="  bg-black"
//                     height={'230px'}
//                     controls
//                   />
//                 )}
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//         <div className="p-8">
//           <div className="text-black mt-2 font-bold text-lg mx-auto text-right w-full  ">
//             {item.title}
//           </div>
//           <p className="  text-caption mt-2">{item.description}</p>
//         </div>
//       </div>
//     </a>
//   )
// }

// export default LandCardItem

import { ApiConstants } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useUser from "@/hooks/api-handlers/auth/useUser";
import { landLinkMaker, sortByattantion } from "@/utils/helper";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import Button from "@/components/form/button/Button";
const LandCardItem = ({ item }) => {
  const { user } = useUser();
  const sortedMedia = sortByattantion({
    mainArray: item.media,
    schemaArray: item.media, //JSON?.parse(item?.mediaOrder ?? []),
    key: "uuid",
  });

  const [hoverCover, setHoverCover] = useState(false);

  // console.table({ sortedMedia, media: item.media, mediaOrder: item.mediaOrder })
  return (
    <div className="  rounded-xl bg-white  w-[350px] h-[350px] group ">
      <div className="mx-auto rounded-xl  w-[350px] h-[350px]  overflow-hidden relative  flex justify-center items-center   bg-[#e8f3fd] ">
        {item.media.length > 0 ? (
          item?.media[0]?.type == "image" ? (
            <img
              onClick={(e) => setHoverCover((prev) => !prev)}
              src={ApiConstants?.mediaBaseUrl + item.media[0]?.uuid}
              className="h-full object-cover w-full "
              alt=""
            />
          ) : (
            <VideoPlayer
              src={ApiConstants?.mediaBaseUrl + item.media[0]?.uuid}
              className="  bg-black"
              height={"100%"}
              controls
            />
          )
        ) : (
          <img
            onClick={(e) => setHoverCover((prev) => !prev)}
            src={'/assets/placeholder.png'}
            className="h-full object-cover w-full "
            alt=""
          />
        )}

        <div
          onClick={(e) => setHoverCover((prev) => !prev)}
          className={`w-full h-full absolute bg-primaryLight/90 top-0 -left-[100%] sm:group-hover:left-0 transition-all duration-500 z-10  ${
            hoverCover && "group-hover:left-0"
          } `}
        >
          <div className="p-8">
            <span className="font-bold text-lg">توضیحات :</span>
            <p className="  text-white mt-2">
              {item.description?.slice(0, 180) + "..."}
            </p>
          </div>
          <Button className="!text-white !bg-black !absolute !bottom-5 !w-fit !px-6 !left-5 ">
            <a
              href={landLinkMaker({ token: user.token, landUuid: item?.uuid })}
              target="_blank"
            >
              مشاهده
            </a>
          </Button>
        </div>
      </div>
      <div className="text-white mt-2 font-bold text-lg mx-auto text-center w-full  ">
        {item.title}
      </div>
    </div>
  );
};

export default LandCardItem;
