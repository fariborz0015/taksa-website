import React, { useEffect, useState } from 'react';
 
 
import { registerByEmailAndPasswordRequest, registerByPhoneAndPasswordRequest, sendOtpRequest, sendOtpRequestToEmail } from '@/service/Requests';
import BackEndReq from '@/service/Api';
 
 

const useRegisterByEmail = () => { 

    const [countDown, setCountDown] = useState(30)
  const [intervalId, setIntervalId] = useState(10)
  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(intervalId)
    }
  }, [countDown])
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
       //defining the countdown time
     setCountDown(30)
    let intervalID = setInterval(() => {
      setCountDown((prev) => prev - 1)
    }, 1000)
    setIntervalId(intervalID)
    return response;
  };

  const regesterComplete = async () => {

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
    countDown,
    setCountDown,
    intervalId,
    setIntervalId,
    regesterComplete
  };
};

export default useRegisterByEmail;
