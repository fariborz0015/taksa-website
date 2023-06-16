import EventList from '@/containers/events/EventList'
import { getEventsList } from '@/service/Requests'

// This gets called on every request
export async function getServerSideProps(context) {

  const res = getEventsList({
    pageNumber: 1,
    pageSize: 100,
  })

 
  // Fetch data from external API
 
  // Pass data to the page via props
  return {
    props: {
      data: (await res).data.result.data.list,
    },
  }
}

export default EventList
