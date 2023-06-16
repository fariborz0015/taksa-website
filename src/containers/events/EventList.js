import EventCardItem from '@/components/event-card/EventCardItem'
import EventsLayout from '@/containers/events/EventsLayout'
import React from 'react'

const EventList = ({data}) => {
  return (
    <EventsLayout>
      <div className="w-full grid grid-cols-3 gap-4">
        {data
          .map((item, index) => (
            <div className="w-full col-span-1 " key={index}>
              <EventCardItem  item={item} />
            </div>
          ))}
      </div>
    </EventsLayout>
  )
}

export default EventList
