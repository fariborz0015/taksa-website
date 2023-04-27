import useLogout from '@/hooks/api-handlers/auth/useLogout'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useAlert from '@/hooks/notification/useAlert'
import { getProfile } from '@/service/Requests'
import { loginLinkMaker, roleCheck } from '@/utils/helper'
import { Icon } from '@iconify/react'
import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useState } from 'react'
const UserBannserItems = () => {
  const { user, setUser } = useUser()
 
  const logout = useLogout()
  const [isLoading, setLoading] = useState(false)
  const { error, info } = useAlert()
  const dashboardHandler = () => {
    setLoading(true)
    getProfile()
      .then((res) => {
        setLoading(false)
        setUser(res?.data?.result?.data?.user)
        let newUser = res?.data?.result?.data?.user
        if (
          roleCheck({
            roles: newUser.roles ?? [],
            roleToCheck: 'SuperAdmin',
          }) ||
          roleCheck({
            roles: newUser.roles ?? [],
            roleToCheck: 'LandAdmin',
          })
        ) {
          window.location.href = loginLinkMaker({ token: Cookies.get('token') })
        } else {
          if (newUser.landRequestStatus) {
            if (newUser.landRequestStatus == 'send') {
              info(
                'کاربر گرامی درخواست شما ثبت شده و در وضعیت "ارسال شده" است لطفا برای تغییر وضعیت از سمت مدیران منتظر بمانید ',
              )
            } else if (newUser.landRequestStatus == 'seen') {
              info(
                'کاربر گرامی درخواست شما ثبت شده و در وضعیت "دیده شده" است لطفا برای تغییر وضعیت از سمت مدیران منتظر بمانید ',
              )
            } else if (newUser.landRequestStatus == 'reject') {
              error(
                'کاربر گرامی  متاسفانه درخواست شما از سمت مدیران رد شده است ',
              )
            }
          } else {
            error(
              'کاربر گرامی ! شما دارای لند نمی باشید - لطفا از قسمت درخواست لند درخواست خود را ثبت کنید ',
            )
          }
        }
      })
      .catch((err) => {
        error(err.response?.data.status?.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <ul className="w-full mt-2 text-black ">
      <Link href={'/profile/chat'}>
        <li
          className="p-3 text-sm flex rtl items-center
    cursor-pointer hover:bg-publicGray
    hover:bg-primary hover:bg-opacity-80 hover:text-white transition-all
    "
        >
          <span className="ml-2">
            <Icon icon="arcticons:libremchat" width={24} />
          </span>
          <span>گفتگو </span>
        </li>
      </Link>

      {(roleCheck({
        roles: user.roles,
        roleToCheck: 'SuperAdmin',
      }) ||
        roleCheck({
          roles: user.roles,
          roleToCheck: 'LandAdmin',
        })) && (
        <button
          onClick={dashboardHandler}
          disabled={isLoading}
          className="p-3 customDisablebutton w-full text-sm flex rtl items-center
    cursor-pointer hover:bg-publicGray
    hover:bg-primary hover:bg-opacity-80 hover:text-white transition-all
    "
        >
          {isLoading ? (
            <Icon icon={'eos-icons:loading'} width={28} />
          ) : (
            <>
              <span className="ml-2">
                <Icon icon="radix-icons:dashboard" s width={20} />
              </span>
              <span> داشبورد نمایشگاه </span>
            </>
          )}
        </button>
      )}

      {/* <li
      className="
      p-3 text-sm flex
      rtl items-center
      cursor-pointer hover:bg-publicGray     
    hover:bg-primary hover:bg-opacity-80 hover:text-white transition-all
    
    "
    >
      <span className="ml-2">
        <Icon icon="carbon:intent-request-upgrade" width={20} />
      </span>
      <span>درخواست های من</span>
    </li> */}

      <button
        onClick={logout.submit}
        className="p-3 text-sm flex rtl items-center w-full rtl
    cursor-pointer hover:bg-publicGray
    text-red-500
    "
      >
        <span className="ml-2">
          <Icon icon="ion:exit-outline" />
        </span>
        <span> خروج </span>
      </button>
    </ul>
  )
}

export default UserBannserItems
