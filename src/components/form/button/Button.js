import { Icon } from '@iconify/react'
import React from 'react'

const Button = (props) => {
  const { title, isLoading, children } = props
  return (
    <button
      disabled={isLoading || props?.disabled}
      {...props}
      className={`customDisablebutton default-btn w-full flex items-center justify-center h-14 transition-all bg-primaryLight   text-white rounded-lg ${
        props?.className ?? ''
      }`}
    >
      {isLoading ? <Icon icon={'eos-icons:loading'} width={28} /> : title}
      {!isLoading && children}
    </button>
  )
}

export default Button
