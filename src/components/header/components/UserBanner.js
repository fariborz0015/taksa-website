import useLogout from '@/hooks/api-handlers/auth/useLogout'
import useUser from '@/hooks/api-handlers/auth/useUser'
import useAlert from '@/hooks/notification/useAlert'
import { getProfile } from '@/service/Requests'
import { roleCheck } from '@/utils/helper'
import useOutsideClick from '@/utils/useOutsideClick'
import { Icon } from '@iconify/react'
import Cookies from 'js-cookie'
import React, { useState } from 'react'

const UserBanner = () => {
  const { user, setUser } = useUser()
  const { open, reference, setOpen } = useOutsideClick()
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
            roles: newUser.roles,
            roleToCheck: 'SuperAdmin',
          }) ||
          roleCheck({
            roles: newUser.roles,
            roleToCheck: 'LandAdmin',
          })
        ) {
          window.location.href =
            'http://185.18.214.5:3001/login?token=' + Cookies.get('token')
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
    <div className="w-fit relative ltr">
      <button
        onClick={() => setOpen(!open)}
        className="w-14 rounded-xl bg-publicGray border hover:bg-primaryLight h-14 
       cursor-pointer items-center flex justify-center transition-all
    "
      >
        <Icon icon="ph:user" width={24} />
      </button>
      {open ? (
        <div className="dropdown " ref={reference}>
          {/* number section */}

          <div className="p-2">
            <div className="w-full h-14 just-center rounded-lg flex justify-center items-center bg-primary ">
              {user?.phone?.phoneNumber.length > 0 ||
              user?.phoneData?.phoneNumber.length > 0 ? (
                <span className="text-white pt-2 text-lg">
                  0{user?.phone?.phoneNumber ?? user?.phoneData?.phoneNumber}
                </span>
              ) : (
                <span className="text-white pt-2 text-sm">{user?.email}</span>
              )}
            </div>
          </div>

          <ul className="w-full mt-2 text-black ">
            <li
              className="p-3 text-sm flex rtl items-center
            cursor-pointer hover:bg-publicGray
            hover:bg-primary hover:bg-opacity-80 hover:text-white transition-all
            "
            >
              <span className="ml-2">
                <Icon icon="ph:user" width={20} />
              </span>
              <span>حساب کاربری</span>
            </li>
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
        </div>
      ) : null}

      <style jsx>{`
        .dropdown {
          top: 120%;
          z-index: 9999;
          left: 0%;
          width: 200px;
          border: 1px solid rgba(230, 230, 230, 1);

          display: flex;

          position: absolute;
          animation: MoveUpDown 0.3s linear;
          border-radius: 10px;
          flex-direction: column;
          background-color: rgba(248, 248, 248, 1);
        }
        .dropdown::after {
          left: 23px;
          width: 0px;
          border: 7px solid transparent;
          border-top-color: transparent;
          border-top-style: solid;
          border-top-width: 7px;
          border-bottom-color: transparent;
          bottom: 100%;
          filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
          height: 0px;
          content: '';
          position: absolute;
          border-top: none;
          border-bottom-color: rgba(248, 248, 248, 1);
        }
        @keyframes MoveUpDown {
          0% {
            opacity: 0;
            visibility: hidden;
            transform: translateY(5%);
          }
          100% {
            opacity: 1;
            visibility: visible;
            transform: translateY(0%);
          }
        }
      `}</style>
    </div>
  )
}

export default UserBanner
