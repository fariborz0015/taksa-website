import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUserListRequest } from 'src/services/Requests';

const useGetUsers = () => {
  const [pagination, setPagination] = useState({
    pageNumber: 1,
    pageSize: 10,
  });

 
  const { data, isLoading, isError } = useQuery(['users', pagination], ({ queryKey }) => getUserListRequest(queryKey[1]));

 
  return {
    data:data?.data?.resul?.data?.users,
    isLoading,
    isError,
    setPagination,
    pagination
  };
};

export default useGetUsers;
