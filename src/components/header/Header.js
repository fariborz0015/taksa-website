import useUser from '@/hooks/api-handlers/auth/useUser'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import UserBanner from './components/UserBanner'
import MobileMenu from '@/components/header/components/MobileMenu'

const Header = () => {
  const { user } = useUser()
  const [navigationModal, setNavigationModal] = useState(false)
  const [inTop, setInTop] = useState(true) // if user in topest scroll mode of page
  useEffect(() => {
    document
      .querySelector('body')
      .addEventListener('scroll', (e) => handleScroll(e))
    return () => {
      document.querySelector('body').removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop
    if (scrollTop === 0) {
      setInTop(true)
    } else {
      setInTop(false)
    }
  }
  return (
    <div
      className={`w-full py-5 sticky top-0 z-50  header-navbar  ${
        !inTop && 'bg-primaryDark'
      }`}
    >
      <div className="container-lg">
        <nav className="w-full h-full flex justify-between sm:flex-row flex-row-reverse px-4 sm:px-0">
          <Link href="/" className="flex items-center">
            <div className="pt-1 max-w-[130px] h-[35px]   cursor-pointer">
              <img
                src="/assets/img/logo.png"
                alt=""
                className="w-full h-full "
              />
            </div>
          </Link>
          <div className="flex-1 sm:flex hidden px-6 items-center h-fullc  ">
            <NavBar />

            {user?.uuid ? (
              <div className="sm:block hidden">
                <UserBanner />
              </div>
            ) : (
              <Link href={'/login'} className="sm:block hidden">
                <button className="px-6 py-3 default-btn  transition-all bg-primaryLight rounded-xl flex items-center space-x-4 space-x-reverse  text-white ">
                  <span>ورود </span>
                  <Icon icon="uiw:login" width={24} color="white" />
                </button>
              </Link>
            )}
          </div>
          <button
            className="sm:hidden block"
            onClick={() => setNavigationModal(true)}
          >
            <Icon icon="ic:round-menu" width={28} color="white" />
          </button>
        </nav>
      </div>

      <MobileMenu
        isOpen={navigationModal}
        onClose={() => setNavigationModal(false)}
      />
    </div>
  )
}

export default Header
