import React, { useEffect, useState } from 'react';
 
 
import { registerByEmailAndPasswordRequest, registerByPhoneAndPasswordRequest, sendOtpRequest, sendOtpRequestToEmail } from '@/service/Requests';
import BackEndReq from '@/service/Api';
 
 

const useRegisterByEmail = () => { 
  const [data, setData] = useState({
 
    email: '',
    otp: '',
    password: '',
  });

 

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const sendOtp = async () => {
    setIsLoading(true);
    let response = await sendOtpRequestToEmail({ prefix: data.prefix, email: data.email });
    setIsLoading(false);
    return response;
  };

  const regesterComplete = async () => {
    console.log('ss')
    setIsLoading(true);
    let response = await registerByEmailAndPasswordRequest(data);
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
    resetData: (params) => {
      setStep(0);
      setData(params)
    },
    sendOtp,
    regesterComplete
  };
};

export default useRegisterByEmail;
