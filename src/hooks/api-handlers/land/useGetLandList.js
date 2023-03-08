import { getLandListRequest } from '@/service/Requests'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

const useGetLandList = () => {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
  })

  const { data, isLoading, isError } = useQuery(
    ['LANDS_LIST', pagination],
    ({ queryKey }) => getLandListRequest(queryKey[1]),
  )

  return {
    data: data?.data?.result?.data,
    isLoading,
    isError,
    setPagination: (params) =>
      setPagination((prev) => ({ ...pagination, ...params })),
    pagination,
    key: 'LANDS_LIST',
  }
}

export default useGetLandList
