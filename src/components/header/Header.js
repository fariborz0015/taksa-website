import useUser from '@/hooks/api-handlers/auth/useUser'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import NavBar from './components/NavBar'
import UserBanner from './components/UserBanner'

const Header = () => {
  const { user } = useUser()

  return (
    <div className="w-full py-5">
      <div className="container-lg">
        <nav className="w-full h-full flex ">
          <Link href="/">
            <div className="pt-1  cursor-pointer">
              <img src="/assets/img/logo.png" alt="" />
            </div>
          </Link>
          <div className="flex-1 flex px-6 items-center h-full">
            <NavBar />
            {user?.uuid ? (
              <UserBanner />
            ) : (
              <Link href={'/login'}>
                <button className="px-9 py-4 hover:bg-primary transition-all bg-primaryLight rounded-xl flex items-center space-x-4 space-x-reverse  text-white ">
                  <span>ورود </span>
                  <Icon icon="uiw:login" width={24} color="white" />
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
