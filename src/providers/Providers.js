import React from 'react'
import UserProvider from './auth/UserProvider'

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default Providers
