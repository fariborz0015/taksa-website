import React, { useState } from 'react'
import Login from './login/Login'
import SignUp from './signup/SignUp'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className="h-full  w-full flex justify-start items-center flex-col text-black min-h-[576px] ">
      <div className="w-full flex max-w-lg">
        <button
          onClick={() => setIsLogin(true)}
          className={`
        px-9 py-4  transition-all  rounded-t-xl flex items-center space-x-4 space-x-reverse 
        ${
          isLogin
            ? 'bg-white text-black'
            : 'bg-[#ffffff50] hover:bg-[#ffffff6d] text-white  '
        }
        `}
        >
          ورود
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`
        px-9 py-4  transition-all  rounded-t-xl flex items-center space-x-4 space-x-reverse 
        ${
          !isLogin
            ? 'bg-white text-black'
            : 'bg-[#ffffff50] hover:bg-[#ffffff6d] text-white  '
        }
        `}
        >
          ثبت نام
        </button>
      </div>
      <div className="max-w-lg w-full bg-white p-4  rounded-b-lg  rounded-tl-lg ">
        {isLogin ? <Login /> : <SignUp />}
      </div>
    </div>
  )
}

export default Auth
