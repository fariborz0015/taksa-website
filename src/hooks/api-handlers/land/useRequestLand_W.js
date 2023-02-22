import useAlert from '@/hooks/notification/useAlert'
import React, { useState } from 'react'
import useRegisterByEmail from '../auth/useRegisterByEmail'
import useRegisterByPhone from '../auth/useRegisterByPhone'
import useRequestLand from './useRequestLand'

const useRequestLand_W = () => {
  const registerByEmail = useRegisterByEmail()
  const { success, error } = useAlert()
  const registerByPhone = useRegisterByPhone()
  const [data, setData] = useState({
    userLogin: true,
    resgisterMode: 'phone',
    firstName: '',
    lastName: '',
  })
  const requestLand = useRequestLand()

  const submit = () => {
    if (data?.userLogin) {
      requestLand
        .submit()
        .then((res) => {
          error(res?.data?.result?.status?.message)
        })
        .catch((err) => {
          error(err?.response?.data?.result?.status?.message)
          setIsLoading(false)
        })
    } else {
      if (data?.resgisterMode == 'phone') {
        if (step == 0) {
          registerByPhone
            ?.sendOtp()
            .then((res) => {
              success(res?.data?.result?.status?.message)
              setStep(1)
            })
            .catch((err) => {
              error(err.response?.data?.result?.status?.message)
              registerByPhone?.setIsLoading(false)
            })
        } else {
          registerByPhone
            ?.regesterComplete()
            .then((res) => {
              registerByPhone?.success(res?.data?.result?.status?.message)
            })
            .catch((err) => {
              error(err.response?.data?.result?.status?.message)
              registerByPhone?.setIsLoading(false)
            })
        }
      } else {
        if (step == 0) {
          registerByEmail
            ?.sendOtp()
            .then((res) => {
              success(res?.data?.result?.status?.message)
              setStep(1)
            })
            .catch((err) => {
              error(err.response?.data?.result?.status?.message)
              registerByEmail?.setIsLoading(false)
            })
        } else {
          registerByEmail
            ?.regesterComplete()
            .then((res) => {
              registerByEmail?.success(res?.data?.result?.status?.message)
            })
            .catch((err) => {
              error(err.response?.data?.result?.status?.message)
              registerByEmail?.setIsLoading(false)
            })
        }
      }
    }
  }

  return {
    submit,
    preRegisterByPhone: registerByPhone,
    preRegisterByEmail: registerByEmail,
  }
}

export default useRequestLand_W
