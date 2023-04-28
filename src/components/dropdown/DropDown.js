import useOutsideClick from '@/utils/useOutsideClick'
import React from 'react'

const DropDown = ({ title, children }) => {
  const { open, reference, setOpen } = useOutsideClick()

  return (
    <div className="w-fit relative ltr ">
      <div
        onClick={() => setOpen(!open)}
        className="  rounded-xl bg-publicGray    h-14 
       cursor-pointer items-center flex justify-center transition-all"
      >
        {title}
      </div>
      {open ? (
        <div className="dropdown " ref={reference}>
          {children}
        </div>
      ) : null}
    </div>
  )
}

export default DropDown
