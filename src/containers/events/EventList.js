import EventCardItem from '@/components/event-card/EventCardItem'
import EventsLayout from '@/containers/events/EventsLayout'
import React from 'react'

const EventList = () => {
  return (
    <EventsLayout>
      <div className="w-full grid grid-cols-2 gap-4">
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <div className="w-full col-span-1 " key={index}>
              <EventCardItem />
            </div>
          ))}
      </div>
    </EventsLayout>
  )
}

export default EventList
