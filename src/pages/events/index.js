import EventList from '@/containers/events/EventList'
import { getEventsList } from '@/service/Requests'

// This gets called on every request
export async function getServerSideProps(context) {
  const res = getEventsList({
    pageNumber: context?.query.page || 1,
    pageSize: 10,
  })
  const popularRes = getEventsList({
    pageNumber: context?.query.page || 1,
    pageSize: 4,
  })

  const data = (await res).data.result.data
  const popularData = (await popularRes).data.result.data.list
  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      data: data.list,
      popular: popularData,
      pagination: {
        totalPage: data.totalPage,
        pageSize: data.pageSize,
        pageNumber: data.pageNumber,
        total: data.total,
      },
    },
  }
}

export default EventList
