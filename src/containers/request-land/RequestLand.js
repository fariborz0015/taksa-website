import Button from '@/components/form/button/Button'
import Modal from '@/components/modal/Modal'
import useUser from '@/hooks/api-handlers/auth/useUser'
import React, { useEffect, useState } from 'react'
import Auth from '../auth/Auth'
import RequestForm from './components/RequestForm'

const RequestLand = () => {
  const { user } = useUser()
  const [loginModal, setLoginModal] = useState()
  useEffect(() => {
    if (user?.uuid) {
      setLoginModal(false)
    }
  }, [user])

  return (
    <div className="w-full h-full container-lg mt-40">
      <h1 className="text-xl font-bold  ">درخواست نمایشگاه</h1>
      <p>
        کاربر گرامی برای دریافت نمایشگاه شما می بایست فرم زیر را پر کرده و ارسال
        کنید تا کاکنان ما در اسرع وقت بتوانند سریع تر با برررسی اطلاعات شما این
        دسترسی را به شما اعطا کنند و شما بتوانید از نمایشگاه مجازی خود استفاده
        کنید
      </p>

      <div className="max-w-3xl mx-auto mt-40  ">
        {user?.uuid ? (
          user.landRequestStatus ? (
            user.landRequestStatus == 'send' ? (
              <div
                class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                role="alert"
              >
                <p class="font-bold">
                  درخواست شما ارسال شده لطفا منتظر تغییر وضعیت درخواست خود باشید{' '}
                </p>
                <p class="text-sm">
                  وضعیت درخواست شما در حالت <b> ارسال شده </b> قرار دارد
                </p>
              </div>
            ) : user.landRequestStatus == 'seen' ? (
              <div
                class="bg-amber-100 border-t border-b border-amber-500 text-amber-700 px-4 py-3"
                role="alert"
              >
                <p class="font-bold">
                  {' '}
                  درخواست شما ارسال شده لطفا منتظر تغییر وضعیت درخواست خود باشید{' '}
                </p>
                <p class="text-sm">
                  وضعیت درخواست شما در حالت <b> دیده شده </b> قرار دارد
                </p>
              </div>
            ) : user.landRequestStatus == 'accept' ? (
              <div
                class="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3"
                role="alert"
              >
                <p class="font-bold">
                  {' '}
                  درخواست شما ارسال شده لطفا منتظر تغییر وضعیت درخواست خود باشید{' '}
                </p>
                <p class="text-sm">
                  وضعیت درخواست شما در حالت <b> پذیرفته شده </b> قرار دارد
                </p>
              </div>
            ) : (
              <div
                class="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3"
                role="alert"
              >
                <p class="font-bold">
                  {' '}
                  درخواست شما ارسال شده لطفا منتظر تغییر وضعیت درخواست خود باشید{' '}
                </p>
                <p class="text-sm">
                  وضعیت درخواست شما در حالت <b>رد شده </b> قرار دارد
                </p>
              </div>
            )
          ) : (
            <RequestForm />
          )
        ) : (
          <Button className="max-w-md mx-auto" onClick={() => setLoginModal(true)}>
            برای ورود کلیک کنید
          </Button>
        )}
      </div>

      <Modal
        options={{
          show: loginModal,
          setShow: setLoginModal,
        }}
      >
        <Auth />
      </Modal>
    </div>
  )
}

export default RequestLand
