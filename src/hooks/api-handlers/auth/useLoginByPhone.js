import React from 'react';
import { useState } from 'react';
import BackEndReq from '@/service/Api';
import { loginByPhoneAndPasswordRequest } from '@/service/Requests';

const useLoginByPhone = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    phoneNumber: '',
    prefix: '98',
    password: '123456',
  });

  // send detected params from data state to api for login
  // add this function to login button
  const submit = async (params = data) => {
    // change loading state to true before request sending
    setIsLoading(true);
    console.log('ss');
    // send request as async function
    const response = await loginByPhoneAndPasswordRequest(params);

    // change losidng state to false after request sended and response recive
    setIsLoading(false);

    // return response as pending value
    BackEndReq.setToken(response?.data?.result?.data?.token);
    return response;
  };

  return {
    data,

    // get new data and replace and merge with existing data
    setData: (params) => setData((prev) => ({ ...prev, ...params })),
    resetData: (params) => setData(params),
    isLoading,
    setIsLoading,
    submit,
  };
};

export default useLoginByPhone;
