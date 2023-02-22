import React, { useState } from 'react'
import SignUpByEmail from './components/SignUpByEmail'
import SingUpByPhone from './components/SignUpByPhone'

const SignUp = () => {
  const [signUpMode, setSignUpMode] = useState('phone')
  return (
    <div className=" w-full   ">
      <h1 className="text-2xl font-bold text-center">ثبت نام </h1>
      <div className="w-full flex max-w-lg space-x-4 space-x-reverse my-10">
        <button
          onClick={() => setSignUpMode('phone')}
          className={`
    
         h-12  transition-all  rounded-md    flex-1  text-center
        ${
          signUpMode=="phone"
            ? 'bg-primary text-white'
            : 'bg-white hover:shadow-lg text-black  '
        }
        `}
        >
          ثبت نام با موبایل
        </button>
        <button
          onClick={() => setSignUpMode('email')}
          className={`
        h-12  transition-all  rounded-md   flex-1  text-center
        ${
          signUpMode=='email'
            ? 'bg-primary text-white'
            : 'bg-white hover:shadow-lg text-black  '
        }
        `}
        >
          ثبت نام با ایمیل
        </button>
      </div>

      <div className="my-5">
        {signUpMode == 'email' ? <SignUpByEmail /> : <SingUpByPhone />}
      </div>
    </div>
  )
}

export default SignUp
