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
          <RequestForm />
        ) : (
          <Button onClick={() => setLoginModal(true)}>
            برای ورود کلیک کنید
          </Button>
        )}
      </div>
  
        <Modal options={{
          show:loginModal,
          setShow:setLoginModal,
        }}>
          <Auth />
        </Modal>
 
    </div>
  )
}

export default RequestLand
