import EventDetail from '@/containers/events/EventDetail'
import { getEventsDetails } from '@/service/Requests'
import React from 'react'
// This gets called on every request
export async function getServerSideProps(ctx) {
  const { id } = ctx.query
  const res = getEventsDetails({
    uuid: id,
  })

  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      data: (await res).data.result.detail,
    },
  }
}

export default EventDetail
