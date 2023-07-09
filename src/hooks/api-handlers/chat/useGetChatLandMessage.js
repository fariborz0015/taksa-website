import { getChatLandsMessages } from '@/service/Requests'
import { useEffect } from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { QUERY_KEYS } from 'src/constants'

const useGetChatLandMessage = ({ landUuid, userUuid }) => {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 1000,
  })
  const [params, setParams] = useState({
    landUuid: landUuid,
  })
  useEffect(() => {
    setParams({
      landUuid: landUuid,
    })
  }, [landUuid, userUuid])

  const { data, isLoading, isError, refetch } = useQuery(
    [QUERY_KEYS.chatMessages + params.userUuid, { ...pagination, ...params }],
    ({ queryKey }) => getChatLandsMessages(queryKey[1]),
    {
      staleTime: 5000,
      refetchInterval: 5000,
    },
  )

  return {
    data: data?.data?.result?.data,
    isLoading,
    isError,
    setPagination: (params) =>
      setPagination((prev) => ({ ...pagination, ...params })),
    pagination,
    key: QUERY_KEYS.chatMessages + params.userUuid,
    refetch,
    params,
    resetParams: setParams,
    setParams: (newParam) => setParams((prev) => ({ ...prev, ...newParam })),
  }
}

export default useGetChatLandMessage
