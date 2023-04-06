import React from 'react'
import UserProvider from './auth/UserProvider'
import { VideoPlayerProvider } from '@/providers/utils/VideoPlayerProvider'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <VideoPlayerProvider>{children}</VideoPlayerProvider>
    </UserProvider>
  )
}

export default Providers
