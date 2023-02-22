import React, { useEffect, useState } from 'react';
 
 
import { registerByPhoneAndPasswordRequest, sendOtpRequest } from '@/service/Requests';
import BackEndReq from '@/service/Api';
 
 

const useRegisterByPhone = () => {
 ;
 
 
 
  const [data, setData] = useState({
    prefix: '+98',
    phoneNumber: '',
    otp: '',
    password: '',
  });

 

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const sendOtp = async () => {
    setIsLoading(true);
    let response = await sendOtpRequest({ prefix: data.prefix, phoneNumber: data.phoneNumber });
    setIsLoading(false);
    return response;
  };

  const regesterComplete = async () => {
    console.log('ss')
    setIsLoading(true);
    let response = await registerByPhoneAndPasswordRequest(data);
    BackEndReq.setToken(response?.data?.result?.data?.token);
    setIsLoading(false);
    return response;
  };

  return {
    data,
    isLoading,
    step,
    setStep,
    setIsLoading,
    setData: (params) => setData((prev) => ({ ...prev, ...params })),
    resetData: (params) => setData({}),
    sendOtp,
    regesterComplete
  };
};

export default useRegisterByPhone;
