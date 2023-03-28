import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useLoginByPhone from '@/hooks/api-handlers/auth/useLoginByPhone'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useAlert from '@/hooks/notification/useAlert'
import useValidation from '@/hooks/useValidation'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

 
const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(/^9\d{9}$/, 'شماره موبایل معتبر نمی باشد ')
    .required('شماره موبایل اجباری می باشد '),
  password: yup
    .string()
    .required('وارد کردن کلمه عبور اجباری است ')
    .min(6, 'کلمه عبور باید بیشتر از 6 کارکاتر باشد '),
})

const LoginByPhone = () => {
  const { data, isLoading, setData, submit, setIsLoading } = useLoginByPhone()
  const { success, error } = useAlert()
  const { setUser } = useUser()
  const [validationStatus, setValidationStatus] = useState(false)
  const { formData, errors, handleChange, validate } = useValidation(
    data,
    validationSchema,
  )

  useEffect(() => {
    async function makeAsync() {
      const isValid = await validate({})
      setValidationStatus(isValid)
    }
    makeAsync()
  }, [data])

  const handleClick = () => {
    submit()
      .then((res) => {
        success(res?.data?.result?.status?.message)

        setUser({
          ...res?.data?.result?.data.user,
          token: res?.data?.result?.data?.token,
        })
        const isSuperAdmin = () => {
          return res?.data?.result?.data.user?.roles.some((item) => {
            return item.roleName === 'SuperAdmin'
          })
        }

        if (isSuperAdmin()) {
          location.replace(
            'http://admin.viraverseco.ir/login?token=' +
              res?.data?.result?.data?.token,
          )
        }
      })
      .catch((err) => {
        error(err.response?.data?.result?.status?.message)
        setIsLoading(false)
      })
  }
  return (
    <div className="w-full">
      <Input
        title="موبایل "
        
        labelProps={{ className: 'text-lg !text-base' }}
        icon={'material-symbols:phone-android-outline-sharp'}
        error={errors?.phoneNumber}
        inputProps={{
          className: 'text-left outline-none h-14 !text-base',
          type: 'tel',
          maxLength: 10,
          name: 'phoneNumber',
          placeholder: '9336186568',
          value: data?.phoneNumber,
          onChange: (e) => {
            handleChange(e)
            setData({ phoneNumber: e.target.value.replace(/^0/, '') })
          },
        }}
      />
      <Input
        value={data?.password}
        onChange={(e) => setData({ password: e.target.value })}
        title="کلمه عبور "
        labelProps={{ className: 'text-lg !text-base' }}
        icon={'material-symbols:key-outline-rounded'}
        error={errors?.password}
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

      <Button
        disabled={!validationStatus}
        isLoading={isLoading}
        title={'ورود '}
        onClick={handleClick}
      />
    </div>
  )
}

export default LoginByPhone
