import React, { useState } from 'react'
import LoginByEmail from './components/LoginByEmail'
import LoginByPhone from './components/LoginByPhone'

const Login = () => {
  const [loginMode, setLoginMode] = useState('phone')
  return (
    <div className=" w-full   ">
      <h1 className="text-2xl font-bold text-center">ورود به حساب کاربری </h1>
      <div className="w-full flex max-w-lg space-x-4 space-x-reverse my-10">
        <button
          onClick={() => setLoginMode('phone')}
          className={`
    
         h-12  transition-all  rounded-md    flex-1  text-center
        ${
          loginMode=="phone"
            ? 'bg-primary text-white'
            : 'bg-white hover:shadow-lg text-black  '
        }
        `}
        >
          ورود با موبایل
        </button>
        <button
          onClick={() => setLoginMode('email')}
          className={`
        h-12  transition-all  rounded-md   flex-1  text-center
        ${
          loginMode=='email'
            ? 'bg-primary text-white'
            : 'bg-white hover:shadow-lg text-black  '
        }
        `}
        >
          ورود با ایمیل
        </button>
      </div>

      <div className="my-5">
        {loginMode == 'email' ? <LoginByEmail /> : <LoginByPhone />}
      </div>
    </div>
  )
}

export default Login
