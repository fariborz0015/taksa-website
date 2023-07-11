import { ApiConstants } from '@/constants'
import EventsLayout from '@/containers/events/EventsLayout'
import { Icon } from '@iconify/react'
import React from 'react'

const EventDetail = ({ data, popular }) => {
  let dNow = new Date()
  let d = new Date(data?.expirationTime)
  let expirationTime = new Intl.DateTimeFormat('fa-IR', {
    dateStyle: 'medium',
  }).format(data?.expirationTime ? d : dNow)
  return (
    <EventsLayout popular={popular}>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="w-full justify-center mt-8 max-w-3xl  mx-auto flex overflow-hidden ">
          <img
            onError={(e) => (e.target.src = '/assets/img/blog1.png')}
            src={
              data?.media?.uuid
                ? ApiConstants.eventMediaBaseUrl + data.media.uuid
                : '/assets/img/blog1.png'
            }
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div className="w-full mt-4 flex gap-4 justify-end ">
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
        <div className="w-full">
          <h1 className="w-full text-black font-bold text-xl mt-4">
            {data.title}
          </h1>

          <div className="my-8 !text-caption">
            {' '}
            <p dangerouslySetInnerHTML={{ __html: data.detail }}></p>
          </div>
        </div>
      </div>
    </EventsLayout>
  )
}

export default EventDetail
