import BackEndReq from '@/service/Api'
import Cookies from 'js-cookie'
import React from 'react'
import useUser from './useUser'
import { useRouter } from 'next/router'

const useLogout = () => {
  const { resetUser } = useUser()
  const router = useRouter()
  const logoutHandler = () => {
    resetUser(false)
    BackEndReq.setToken(null)
    Cookies.remove('token')
    router.push('/')
    // other commands for loagout .. like call api or delete cookies
  }
  return {
    submit: logoutHandler,
  }
}

export default useLogout
