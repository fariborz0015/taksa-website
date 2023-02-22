import BackEndReq from '@/service/Api'
import Cookies from 'js-cookie'
import React from 'react'
import useUser from './useUser'

const useLogout = () => {
  const { resetUser } = useUser()

  const logoutHandler = () => {
    resetUser(false)
    BackEndReq.setToken(null)
    Cookies.remove('token')
    // other commands for loagout .. like call api or delete cookies
  }
  return {
    submit: logoutHandler,
  }
}

export default useLogout
