import EventDetail from '@/containers/events/EventDetail'
import { getEventsDetails, getEventsList } from '@/service/Requests'
import React from 'react'
// This gets called on every request
export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const res = getEventsDetails({
    uuid: id,
  })
  const popularRes = getEventsList({
    pageNumber: 1,
    pageSize: 4,
  })
  const popularData = (await popularRes).data.result.data.list
  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      popular: popularData,
      data: (await res).data.result.detail,
    },
  }
}

export default EventDetail
