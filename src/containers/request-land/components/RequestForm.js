import Button from '@/components/form/button/Button'
import Input from '@/components/form/input/Input'
import TextArea from '@/components/form/textarea/TextArea'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useRequestLand from '@/hooks/api-handlers/land/useRequestLand'
import useRequestLand_W from '@/hooks/api-handlers/land/useRequestLand_W'
import useAlert from '@/hooks/notification/useAlert'
import React, { useState } from 'react'

const RequestForm = () => {
  const { user } = useUser()
  const { success, error } = useAlert()
  const { submit, isLoading, setIsLoading, data, setData } = useRequestLand()
  const onClickHandler = () => {
    submit()
      .then((res) => {
        success('درخواست شما ثبت شد ')
      })
      .catch((err) => {
        error(err?.response?.data?.result?.status?.message)
        setIsLoading(false)
      })
  }

  return (
    <div className="bg-white rounded-xl p-4 text-black">
      <h1 className="text-xl font-bold pr-4">فرم درخواست </h1>

      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 ">
        <Input
          labelProps={{ className: 'text-lg !text-base' }}
          inputProps={{
            className: 'text-right outline-none h-14 !text-base',
            type: 'text',
            name: 'first_name',
            placeholder: 'نام',
            disabaled: true,
            value: user?.name,
          }}
        />
        <Input
          labelProps={{ className: 'text-lg !text-base' }}
          inputProps={{
            disabaled: true,
            className: 'text-right outline-none h-14 !text-base',
            type: 'text',
            name: 'first_name',
            placeholder: 'نام خانوادگی ',
            value: user?.lastName,
          }}
        />
      </div>
      <div className="">
        <TextArea
          labelProps={{ className: 'text-lg !text-base' }}
          inputProps={{
            className: 'text-right outline-none h-14 !text-base',
            type: 'text',
            name: 'first_name',
            rows: 5,
            value: data?.description,
            onChange: (e) => setData({ description: e.target.value }),
            placeholder:
              'توضیحات خود و دلایل خود را برای ارسال این درخواست در این جا بنویسید ',
          }}
        />
      </div>

      <Button isLoading={isLoading} onClick={onClickHandler}>
        ارسال درخواست سرزمین
      </Button>
    </div>
  )
}

export default RequestForm
