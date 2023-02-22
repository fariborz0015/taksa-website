import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useLoginByPhone from '@/hooks/api-handlers/auth/useLoginByPhone'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useAlert from '@/hooks/notification/useAlert'
import React from 'react'

const LoginByPhone = () => {
  const { data, isLoading, setData, submit, setIsLoading } = useLoginByPhone()
  const { success, error } = useAlert()
  const {setUser}=useUser()
  const handleClick = () => {
    submit()
      .then((res) => {
        success(res?.data?.result?.status?.message)
        console.log('first')
        setUser({
          ...res?.data?.result?.data.user,
          token: res?.data?.result?.data?.token,
        })
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
        inputProps={{
          className: 'text-left outline-none h-14 !text-base',
          type: 'tel',
          placeholder: '09336186568',
          value: data?.phoneNumber,
          onChange: (e) => setData({ phoneNumber: e.target.value }),
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

      <Button isLoading={isLoading} title={'ورود '} onClick={handleClick} />
    </div>
  )
}

export default LoginByPhone
