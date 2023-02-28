import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useRegisterByEmail from '@/hooks/api-handlers/auth/useRegisterByEmail'
import useRegisterByPhone from '@/hooks/api-handlers/auth/useRegisterByPhone'
import useUser from '@/hooks/api-handlers/auth/useUser'
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
    resetData,
    countDown,
  } = useRegisterByEmail()
  const { setUser } = useUser()
  const { success, error } = useAlert()
  const sendOtpHandler = () => {
    sendOtp()
      .then((res) => {
        success(res?.data?.result?.status?.message)
        setStep(1)
      })
      .catch((err) => {
        error(err.response?.data?.result?.status?.message)
        setIsLoading(false)
      })
  }
  const onClickHandler = (step) => {
    if (step == 0) {
      sendOtpHandler()
    } else if (step == 1) {
      setStep(2)
    } else if (step == 2) {
      regesterComplete()
        .then((res) => {
          success(res?.data?.result?.status?.message)
          setUser({
            ...res?.data?.result?.data.user,
            token: res?.data?.result?.data?.token,
          })
          resetData()
        })
        .catch((err) => {
          error(err.response?.data?.result?.status?.message)
          setIsLoading(false)
        })
    }
  }
  return (
    <div>
      {step == 0 ? (
        <Input
          value={data?.email}
          onChange={(e) => setData({ email: e.target.value })}
          title="ایمیل  "
          labelProps={{ className: 'text-lg !text-base' }}
          icon={'material-symbols:alternate-email'}
          inputProps={{
            className: 'text-left outline-none h-14 !text-base',
            type: 'email',
            name: 'email',
            placeholder: 'Admin@domain.com',
            value: data?.email,
            onChange: (e) => setData({ email: e.target.value }),
          }}
        />
      ) : step == 1 ? (
        <div>
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

          <div className="w-full flex justify-between items-center pb-4">
            <div>درخواست دوباره کد تایید تا 00:{countDown} ثانیه دیگر</div>
            <button
              disabled={countDown !== 0}
              className={` w-1/4  ${
                countDown !== 0 ? 'text-gray-500 ' : 'text-primary font-bold'
              } `}
              onClick={sendOtpHandler}
            >
              <span className="text-xxs   px-2"> ارسال دوباره کد</span>
            </button>
          </div>
        </div>
      ) : (
        step == 2 && (
          <>
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4">
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
        )
      )}
      <div className="w-full flex space-x-2 space-x-reverse ">
        <Button
          isLoading={isLoading}
          title={
            step == 0
              ? ' تایید '
              : step == 1
              ? 'تایید و ادامه '
              : 'تایید و ثبت نام '
          }
          onClick={() => onClickHandler(step)}
        />
        {step == 1 && (
          <div className="w-1/3">
            <Button
              className="!bg-white transition-all  border border-primary/10 hover:border-primary"
              isLoading={isLoading}
              title={
                <span className="text-xxs text-primary"> ویرایش ایمیل</span>
              }
              onClick={() => setStep(0)}
            />
          </div>
        )}
        {step == 2 && (
          <div className="w-1/3">
            <Button
              className="!bg-white transition-all  border border-primary/10 hover:border-primary"
              isLoading={isLoading}
              title={
                <span className="text-xxs text-primary px-2">
                  {' '}
                  ویرایش کد تایید
                </span>
              }
              onClick={() => setStep(1)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpByPhone
