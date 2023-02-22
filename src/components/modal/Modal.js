import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'

const Modal = ({ children, options }) => {
  const {
    show,
    setShow,
    dialogPosition = 'center',
    overlayColor = 'rgba(0, 0, 0, 0.7)',
  } = options

  const Position = (pos) => {
    switch (pos) {
      case 'center':
        return 'items-center'
      case 'top':
        return 'items-start'
      case 'bottom':
        return 'items-end'
      default:
        return 'items-end'
    }
  }



  return (
    <div
      className={`w-full h-full fixed top-0 left-0 justify-center backdrop-blur-lg ${
        show ? 'block' : 'delay-300  !w-0 !h-0 overflow-hidden'
      } `}
    >
      <div
        className={`  fixed top-0 right-0  w-full h-full z-20 animate__animated ${
          show ? 'animate__zoomIn  ' : 'animate__zoomOut  '
        }`}
      >
        <div
          className={`  flex justify-center   mx-auto h-full ${Position(
            dialogPosition,
          )}`}
          onClick={(e) => (e.target == e.currentTarget ? setShow(false) : null)}
        >
          <div
            className={`sm:min-w-[500px] min-w-full confirm-pan right-0 relative  rounded-t-lg  h-fit    `}
          >
            <span
              onClick={() => setShow(false)}
              className="absolute left-0 cursor-pointer"
            >
              <Icon icon="material-symbols:close" width={30} color={'white'} />
            </span>
            {children}
          </div>
        </div>
      </div>

      <div
        className={`fixed bg-black bg-opacity-50   flex justify-center w-screen h-full  `}
        onClick={(e) => (e.target == e.currentTarget ? setShow(false) : null)}
      ></div>
    </div>
  )
}

export default Modal
