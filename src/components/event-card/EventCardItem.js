import { ApiConstants } from '@/constants'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const EventCardItem = ({ item }) => {
  let dNow = new Date()
  let d = new Date()
  let expirationTime = new Intl.DateTimeFormat('fa-IR', {
    dateStyle: 'medium',
  }).format(item?.expirationTime ? d : dNow)
  return (
    <div className="w-full bg-white overflow-hidden relative group rounded-xl">
      <div className="h-12 absolute transition-all duration-300 flex rounded-br-xl items-center justify-center bg-primaryLight px-4 w-fit -left-full top-0 group-hover:left-0 text-white">
        {expirationTime}
      </div>
      <Link href={'/events/' + item?.uuid}>
        <div className="w-full h-[300px] max-w-[400]  overflow-hidden bg-[#e4f3fe] ">
          <img
            onError={(e) => (e.target.src = '/assets/img/blog1.png')}
            src={
              item?.media?.uuid
                ? ApiConstants.eventMediaBaseUrl + item.media.uuid
                : '/assets/img/blog1.png'
            }
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
      <div className="w-full h-auto px-10 pt-10 pb-5">
        <div className="w-full flex gap-4 ">
          {/* <span className="flex gap-2">
            <span>
              <Icon
                icon={'formkit:time'}
                width={24}
                color="var(--color-primaryLight)"
              />
            </span>
            <span className="font-light text-black">15:45</span>
          </span> */}
          <span className="flex gap-2">
            <span>
              <Icon
                icon={'fontisto:date'}
                width={24}
                color="var(--color-primaryLight)"
              />
            </span>
            <span className="font-light text-black">{expirationTime}</span>
          </span>
        </div>
        <Link href={'/events/' + item?.uuid}>
          <div className="w-full mt-4">
            <h1 className="text-xl font-bold text-black">{item?.title}</h1>
            <p className="text-sm text-caption text-justify">
              {item?.abstract}
            </p>
          </div>
        </Link>
        <div className="flex justify-end mt-4">
          <Link href={'/events/' + item?.uuid}>
            <button className="border rounded-lg py-3 px-6 text-black  left-0 hover:text-primaryLight hover:border-primaryLight transition-all">
              <span>بیشتر بدانید </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCardItem
