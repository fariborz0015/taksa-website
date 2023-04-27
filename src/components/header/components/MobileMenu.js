import { useEffect } from 'react'
import { useState } from 'react'

import 'animate.css'
import { Icon } from '@iconify/react'
import Collapse from '@/components/collapseable/CollapseAble'
import { NAV_ITEMS } from '@/constants'
import Link from 'next/link'
import UserBannserItems from '@/components/header/components/UserBannserItems'
import useUser from '@/hooks/api-handlers/auth/useUser'
import { useRouter } from 'next/router'

function MobileMenu({ isOpen, onClose }) {
  const [isShown, setIsShown] = useState(false)
  const { user, setUser } = useUser()
  const router = useRouter()
  useEffect(() => {
    setIsShown(isOpen)
  }, [isOpen])

  useEffect(() => {
    // Disable scrolling when the menu is open
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  function handleClose() {
    setIsShown(false)
    setTimeout(onClose, 500) // wait for animation to finish before closing
  }

  useEffect(() => {
    setIsShown(false)
    setTimeout(onClose, 500)
  }, [router.asPath])

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gray-black/70 backdrop-blur  "
        onClick={onClose}
      ></div>
      {/* Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm pt-5 pb-4 bg-white shadow-xl animate__animated ${
          isShown ? 'animate__slideInRight' : 'animate__slideOutRight'
        }`}
        onAnimationEnd={() => {
          if (!isShown) {
            onClose()
          }
        }}
      >
        <div className="flex items-center justify-between px-4">
          <button className="p-2" onClick={handleClose}>
            <Icon icon="ic:close" className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <nav className="flex-1 px-4  mt-6 divide-y ">
          {user ? (
            <Collapse
              title={
                <div className="text-lg font-medium text-gray-900  flex space-x-4 space-x-reverse">
                  <Icon icon="ph:user" className="w-6 h-6 text-gray-500" />
                  <span> {user?.name + ' ' + user?.lastName}</span>
                </div>
              }
            >
              <UserBannserItems />
            </Collapse>
          ) : (
            <a
              href={'/login'}
              className="flex w-full space-x-4 space-x-reverse p-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              <Icon icon="ph:user" width={24} />
              <span>ورود / ثبت نام </span>
            </a>
          )}

          {NAV_ITEMS.map((item) => (
            <Collapse
              title={
                item.href ? (
                  <Link href={item?.href ?? '#'}>{item.title}</Link>
                ) : (
                  item.title
                )
              }
              key={item.id}
            >
              {!!item?.children?.length &&
                item?.children.map((child) => (
                  <a
                    href={''}
                    className="block  p-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 hover:text-gray-900"
                  >
                    {child.title}
                  </a>
                ))}
            </Collapse>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
