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
    <div className="w-full  text-white rounded-xl py-10 px-6 my-10 container-lg  flex flex-col justify-between   ">
      {user?.uuid ? (
        !user.landRequestStatus ? (
          <div className="w-full text-white   px-4">
            <h1 className="text-xl font-bold w-full  text-right">
              درخواست سرزمین
            </h1>
            <p className="  mt-2">
              لطفا اطلاعات زیر را تکمیل و ارسال نمایید. پس از بررسی و تایید
              درسامانه، سرزمین نمایشگاهی شما به طور خودکار ایجاد شده و دسترسی
              شما به پنل کنترل آن باز می شود
            </p>
          </div>
        ) : (
          <div className="w-full   mb-4 ">
            <h1 className="text-xl font-bold w-full  text-right text-white">
              نتیجه درخواست سرزمین :
            </h1>
          </div>
        )
      ) : (
        <div className="w-full   mb-4  ">
          <h1 className="text-xl font-bold w-full  text-center text-white">
            برای درخواست سرزمین لطفا وارد شوید
          </h1>
        </div>
      )}

      <div className="w-full  mx-auto px-4 items-center flex-1  flex  justify-center ">
        {user?.uuid ? (
          user.landRequestStatus ? (
            <div className="w-full  ">
              {user.landRequestStatus == 'send' ?? (
                <p class="text-white pb-4">
                  درخواست سرزمین شما ارسال شده و منتظر تایید ادمین سامانه می
                  باشد. در صورتی که بیش از 24 ساعت از درخواست شما گذشته است برای
                  پی گیری می توانید با پشتیبانی تماس حاصل فرمایید.
                </p>
              )}
              {user.landRequestStatus == 'send' ? (
                <div
                  class="bg-blue-100 w-full border rounded-xl h-fit  border-blue-500 text-blue-700 px-4 py-3"
                  role="alert"
                >
                  <p class="font-bold text-lg"> توجه !</p>
                  <p class="text-sm mt-2">
                    وضعیت درخواست شما در حالت{' '}
                    <b className="font-extrabold"> ارسال شده </b> قرار دارد
                  </p>
                </div>
              ) : user.landRequestStatus == 'seen' ? (
                <div
                  class="bg-amber-100  w-full border rounded-xl h-fit border-amber-500 text-amber-700 px-4 py-3"
                  role="alert"
                >
                  <p class="font-bold text-lg"> توجه !</p>
                  <p class="text-sm mt-2">
                    وضعیت درخواست شما در حالت{' '}
                    <b className="font-extrabold"> دیده شده </b> قرار دارد
                  </p>
                </div>
              ) : user.landRequestStatus == 'accept' ? (
                <div
                  class="bg-green-100 w-full border rounded-xl h-fit border-green-500 text-green-700 px-4 py-3"
                  role="alert"
                >
                  <p class="font-bold text-lg"> تبریک !</p>
                  <p class="text-sm mt-2">
                    وضعیت درخواست شما در حالت{' '}
                    <b className="font-extrabold"> پذیرفته شده </b> قرار دارد
                  </p>
                </div>
              ) : (
                <div
                  class="bg-red-100 w-full border rounded-xl h-fit border-red-500 text-red-700 px-4 py-3"
                  role="alert"
                >
                  <p class="font-bold text-lg"> توجه !</p>
                  <p class="text-sm mt-2">
                    وضعیت درخواست شما در حالت{' '}
                    <b className="font-extrabold"> رد شده </b> قرار دارد
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div class="w-full max-w-4xl my-10 border rounded-xl ">
              <RequestForm />
            </div>
          )
        ) : (
          <Button
            className="max-w-xs mx-auto"
            onClick={() => setLoginModal(true)}
          >
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
