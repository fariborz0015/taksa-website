import React from 'react'
import { useState } from 'react'
import { requestLandRequest } from '@/service/Requests'

const useRequestLand = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()
  // send detected params from data state to api for login
  // add this function to login button
  const submit = async (params = data) => {
    // change loading state to true before request sending
    setIsLoading(true)
    // send request as async function
    const response = await requestLandRequest(params)
    // change losidng state to false after request sended and response recive
    setIsLoading(false)
    return response
  }

  return {
    data,
    // get new data and replace and merge with existing data
    setData: (params) => setData((prev) => ({ ...prev, ...params })),
    resetData: (params) => setData(params),
    isLoading,
    setIsLoading,
    submit,
  }
}

export default useRequestLand
