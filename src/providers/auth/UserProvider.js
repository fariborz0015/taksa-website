import Cookies from 'js-cookie'
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import BackEndReq from '@/service/Api'
import { getProfile } from '@/service/Requests'

export const UserDataContext = createContext(null)
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (user?.token) {
      Cookies.set('token', user.token)
    }
  }, [user])
  useEffect(() => {
    if (Cookies.get('token')) {
      BackEndReq.setToken(Cookies.get('token'))
    }
    if (user == null) {
      getProfile()
        .then((res) => {
          setUser(res?.data?.result?.data?.user)
        })
        .catch((err) => {
          setUser(false)
        })
    }
  }, [])

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserProvider
