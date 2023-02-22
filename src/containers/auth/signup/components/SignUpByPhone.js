import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useRegisterByPhone from '@/hooks/api-handlers/auth/useRegisterByPhone'
import useAlert from '@/hooks/notification/useAlert'
import React from 'react'

const SignUpByPhone = () => {
  const {
    setData,
    data,
    isLoading,
    step,
    sendOtp,
    setStep,
    regesterComplete,
    setIsLoading,
    resetData 
  } = useRegisterByPhone()
  const { success, error } = useAlert()
  const onClickHandler = (step) => {
    if (step == 0) {
      sendOtp()
        .then((res) => {
          success(res?.data?.result?.status?.message)
          setStep(1)
        })
        .catch((err) => {
          error(err.response?.data?.result?.status?.message)
          setIsLoading(false)
        })
    } else {
      regesterComplete()
        .then((res) => {
          success(res?.data?.result?.status?.message)
          setUser({
            ...res?.data?.result?.data?.user,
            token: res?.data?.result?.data?.token,
          })
          console.log('sssss', {
            ...res?.data?.result?.data?.user,
            token: res?.data?.result?.data?.token,
          })
          resetData()
        })
        .catch((err) => {
          error(err.response?.data?.result?.status?.message)
          setIsLoading(false)
          console.log('eror')
        })
    }
  }
  return (
    <div>
      {step == 0 ? (
        <Input
          title="موبایل "
          labelProps={{ className: 'text-lg !text-base' }}
          icon={'material-symbols:phone-android-outline-sharp'}
          inputProps={{
            className: 'text-left outline-none h-14 !text-base',
            type: 'tel',
            placeholder: '09336186568',
            value: data?.phoneNumber,
            onChange: (e) => setData({ phoneNumber: e.target.value }),
          }}
        />
      ) : (
        <>
          <div className="w-full grid sm:grid-cols-2 gap-4 grid-cols-1">
            <Input
              title="نام   "
              labelProps={{ className: 'text-lg !text-base' }}
              inputProps={{
                className: 'text-right outline-none h-14 !text-base',
                value: data?.name,
                placeholder: 'نام ',
                onChange: (e) => setData({ name: e.target.value }),
              }}
            />
            <Input
              title="نام خانوادگی "
              labelProps={{ className: 'text-lg !text-base' }}
              inputProps={{
                className: 'text-right outline-none h-14 !text-base',
                value: data?.lastName,
                placeholder: 'نام خانوادگی ',
                onChange: (e) => setData({ lastName: e.target.value }),
              }}
            />
          </div>

          <Input
            title="کد تایید "
            labelProps={{ className: 'text-lg !text-base' }}
            icon={'material-symbols:sms-outline-rounded'}
            inputProps={{
              className: 'text-left outline-none h-14 !text-base',
              type: 'tel',
              placeholder: '55555',
              value: data?.otp,
              onChange: (e) => setData({ otp: e.target.value }),
            }}
          />
          <Input
            value={data?.password}
            onChange={(e) => setData({ password: e.target.value })}
            title="کلمه عبور "
            labelProps={{ className: 'text-lg !text-base' }}
            icon={'material-symbols:key-outline-rounded'}
            inputProps={{
              className: 'text-left outline-none h-14 !text-base',
              type: 'password',
              placeholder: '*******',
              value: data?.password,
              onChange: (e) => setData({ password: e.target.value }),
            }}
          />
        </>
      )}
      <Button
        isLoading={isLoading}
        title={' تایید '}
        onClick={() => onClickHandler(step)}
      />
    </div>
  )
}

export default SignUpByPhone
