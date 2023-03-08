import Home from '@/containers/home/Home'
import useGetLandList from '@/hooks/api-handlers/land/useGetLandList'
import { getLandListRequest } from '@/service/Requests'

// This gets called on every request
export async function getServerSideProps() {
  const res = getLandListRequest({
    pageNumber: 1,
    pageSize: 100,
  })

  // Fetch data from external API

  // Pass data to the page via props
  return {
    props: {
      lands:  (await res).data.result.data.lands,
    },
  }
}

export default Home
