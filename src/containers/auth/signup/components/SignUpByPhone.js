import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useRegisterByPhone from '@/hooks/api-handlers/auth/useRegisterByPhone'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useAlert from '@/hooks/notification/useAlert'
import useValidation from '@/hooks/useValidation'
import React, { useEffect, useState } from 'react'

import * as yup from 'yup'

const SchemasByStepsp = {
  0: yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^9\d{9}$/, 'شماره موبایل معتبر نمی باشد ')
      .required('شماره موبایل اجباری می باشد '),
  }),

  1: yup.object().shape({
    otp: yup
      .string()
      .min(5, 'کد تایید باید برابر با 5 کاراکتر باشد ')
      .max(5, 'کد تایید باید برابر با 5 کاراکتر باشد ')
      .required('شماره موبایل اجباری می باشد '),
  }),
  2: yup.object().shape({
    name: yup.string().required('  نام اجباری می باشد '),
    lastName: yup.string().required('  نام خانوادگی اجباری می باشد '),
    password: yup
      .string()
      .required('وارد کردن کلمه عبور اجباری است ')
      .min(8, 'کلمه عبور باید بیشتر از 8 کارکاتر باشد '),
  }),
}

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
  } = useRegisterByPhone()
  const { success, error } = useAlert()
  const { setUser } = useUser()
  const [validationStatus, setValidationStatus] = useState(false)
  const { formData, errors, handleChange, validate } = useValidation(
    data,
    SchemasByStepsp[0],
  )

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
            ...res?.data?.result?.data?.user,
            token: res?.data?.result?.data?.token,
          })

          resetData()
        })
        .catch((err) => {
          error(err.response?.data?.result?.status?.message)
          setIsLoading(false)
          setData()
          console.log(err)
        })
    }
  }

  useEffect(() => {
    async function makeAsync() {
      const isValid = await validate({
        schema: SchemasByStepsp[step] ?? {},
      })
      setValidationStatus(isValid)
    }
    makeAsync()
  }, [data, step])

  return (
    <div>
      {step == 0 ? (
        <Input
          error={errors?.phoneNumber}
          title="موبایل "
          labelProps={{ className: 'text-lg !text-base' }}
          icon={'material-symbols:phone-android-outline-sharp'}
          inputProps={{
            className: 'text-left outline-none h-14 !text-base',
            type: 'tel',
            placeholder: '9336186568',
            maxLength: 10,
            name: 'phoneNumber',
            value: data?.phoneNumber,
            onChange: (e) => {
              handleChange(e)
              setData({ phoneNumber: e.target.value.replace(/^0/, '') })
            },
          }}
        />
      ) : step == 1 ? (
        <div>
          <Input
            title="کد تایید "
            labelProps={{ className: 'text-lg !text-base' }}
            icon={'material-symbols:sms-outline-rounded'}
            error={errors?.otp}
            inputProps={{
              className: 'text-left outline-none h-14 !text-base ',
              type: 'tel',
              placeholder: '55555',
              name: 'otp',
              maxLength: '5',
              value: data?.otp,
              onChange: (e) => {
                handleChange(e)
                setData({ otp: e.target.value })
              },
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
            <div className="w-full grid sm:grid-cols-2 gap-4 grid-cols-1">
              <Input
                title="نام   "
                labelProps={{ className: 'text-lg !text-base' }}
                error={errors.name}
                inputProps={{
                  className: 'text-right outline-none h-14 !text-base',
                  value: data?.name,
                  placeholder: 'نام ',
                  name: 'name',
                  onChange: (e) => {
                    handleChange(e)
                    setData({ name: e.target.value })
                  },
                }}
              />
              <Input
                title="نام خانوادگی "
                labelProps={{ className: 'text-lg !text-base' }}
                error={errors.lastName}
                inputProps={{
                  className: 'text-right outline-none h-14 !text-base',
                  value: data?.lastName,
                  name: 'lastName',
                  placeholder: 'نام خانوادگی ',
                  onChange: (e) => {
                    handleChange(e)
                    setData({ lastName: e.target.value })
                  },
                }}
              />
            </div>

            <Input
              value={data?.password}
              onChange={(e) => setData({ password: e.target.value })}
              error={errors.password}
              title="کلمه عبور "
              labelProps={{ className: 'text-lg !text-base' }}
              icon={'material-symbols:key-outline-rounded'}
              inputProps={{
                className: 'text-left outline-none h-14 !text-base',
                type: 'password',
                placeholder: '*******',
                name: 'password',
                value: data?.password,
                onChange: (e) => {
                  handleChange(e)
                  setData({ password: e.target.value })
                },
              }}
            />
          </>
        )
      )}
      <div className="w-full flex space-x-2 space-x-reverse ">
        <Button
          disabled={!validationStatus}
          isLoading={isLoading}
          title={step == 0 ? ' تایید ' : 'تایید و ثبت نام '}
          onClick={() => onClickHandler(step)}
        />
        {step == 1 && (
          <div className="w-1/3">
            <Button
              className="!bg-white transition-all  border border-primary/10 hover:border-primary"
              isLoading={isLoading}
              title={
                <span className="text-xxs text-primary"> ویرایش شماره</span>
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
