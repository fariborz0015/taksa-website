import Home from '@/containers/home/Home'
import useGetLandList from '@/hooks/api-handlers/land/useGetLandList'
import { getEventsList, getLandListRequest } from '@/service/Requests'

// This gets called on every request
export async function getServerSideProps(context) {
  const res = getLandListRequest({
    pageNumber: 1,
    pageSize: 100,
  })

  const popularRes = getEventsList({
    pageNumber: 1,
    pageSize: 3,
  })

  const popularData = (await popularRes).data.result.data.list

  // const events = getEventsList({
  //   pageNumber: 1,
  //   pageSize: 3,
  // })

  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      lands: (await res).data.result.data.lands,
      events: popularData,
      //    events: (await events).data.result.data.list,
    },
  }
}

export default Home
