import { getSupportMessagesRequest } from "@/service/Requests";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "src/constants";

const useGetSupportChatMessages = () => {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 1000,
  });

  const { data, isLoading, isError, refetch } = useQuery(
    [QUERY_KEYS.chatMessages, pagination],
    ({ queryKey }) => getSupportMessagesRequest(queryKey[1]),
    {
      staleTime: 5000,
      refetchInterval: 5000,
    }
  );

  return {
    data: data?.data?.result?.data??[],
    isLoading,
    isError,
    setPagination: (params) =>
      setPagination((prev) => ({ ...prev, ...params })),
    pagination,
    key: QUERY_KEYS.chatMessages,
    refetch,
  };
};

export default useGetSupportChatMessages;
