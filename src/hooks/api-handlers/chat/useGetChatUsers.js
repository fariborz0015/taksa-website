import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'src/constants';
import { getChatUsers } from 'src/services/Requests';

const useGetChatUsers = ({ landUuid }) => {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
  });
  const [params, setParams] = useState({
    landUuid: landUuid,
  });
  useEffect(() => {
    setParams({
      landUuid: landUuid,
    });
  }, [landUuid]);

  const { data, isLoading, isError } = useQuery(
    [QUERY_KEYS.chatUsers + params.landUuid, { ...pagination, ...params }],
    ({ queryKey }) => getChatUsers(queryKey[1])
  );

  return {
    data: data?.data?.result?.data,
    isLoading,
    isError,
    setPagination: (params) => setPagination((prev) => ({ ...pagination, ...params })),
    pagination,
    key: QUERY_KEYS.chatUsers + params.landUuid,
    params,
    resetParams: setParams,
    setParams: (newParam) => setParams((prev) => ({ ...prev, ...newParam })),
  };
};

export default useGetChatUsers;
