import { sendChatMessage } from '@/service/Requests'
import { useEffect, useState } from 'react'

const useSendChatMessage = ({ userUuid, landUuid }) => {
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState({
    landUuid: landUuid,
    text: '',
  })

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      landUuid: landUuid,
    }))
  }, [landUuid, userUuid])

  // send detected params from data state to api for login
  // add this function to login button
  const submit = async () => {
    // change loading state to true before request sending
    setIsLoading(true)

    // delete null or indefinde property from object if present
    // like if dont have uuid remove ite from params and will check user from token in backend

    // send request as async function
    const response = await sendChatMessage(data)
    // change losidng state to false after request sended and response recive
    setIsLoading(false)

    return response
  }

  return {
    isLoading,
    setIsLoading,
    submit,
    data,
    setData: (params) => setData((prev) => ({ ...prev, ...params })),
  }
}

export default useSendChatMessage
