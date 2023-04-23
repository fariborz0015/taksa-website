import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import LodaingPage from '@/components/loading-page/LodaingPage'
import useUser from '@/hooks/api-handlers/auth/useUser'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Layout = ({ children }) => {
  const router = useRouter()
  const { user } = useUser()
  const privateRoutes = ['profile', 'chat']
  useEffect(() => {
    let routeSplite = router?.asPath?.split('/')
    if (
      privateRoutes.includes(
        routeSplite[routeSplite.length - 1] && user == false,
      )
    ) {
      router.push('/login')
    } else if (router?.asPath?.search('login') > 0 && user.uuid) {
      router.push(window.location.origin + '/')
    }
  }, [user, router])
  return (
    <div className="w-full min-h-full flex flex-col justify-between  bg-[#000857]">
      {user == null ? (
        <LodaingPage />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  )
}

export default Layout
