import { Icon } from '@iconify/react'
import React from 'react'

const Input = ({ title, inputProps, icon , labelProps}) => {
  return (
    <div className="w-full">
      <label
        for="input-group-1"
        {...labelProps}
        className={`block mb-2 text-sm font-medium text-gray-900 ${labelProps?.className??''}`}
      >
        {title}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon icon={icon} width={24} />
        </div>
        <input
          type="text"
          id="input-group-1"
         
          {...inputProps}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 ${inputProps?.className??''}`}
        />
      </div>
    </div>
  )
}

export default Input
