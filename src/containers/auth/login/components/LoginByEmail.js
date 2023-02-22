import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import useLoginByEmail from '@/hooks/api-handlers/auth/useLoginByEmail'
import useUser from '@/hooks/api-handlers/auth/useUser'

import useAlert from '@/hooks/notification/useAlert'
import React from 'react'

const LoginByEmail = () => {
  const { data, isLoading, setData, submit, setIsLoading } = useLoginByEmail()
  const { success, error } = useAlert()
  const { setUser } = useUser()
  const handleClick = () => {
    submit()
      .then((res) => {
        success(res?.data?.result?.status?.message)
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
      <Input
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

export default LoginByEmail
