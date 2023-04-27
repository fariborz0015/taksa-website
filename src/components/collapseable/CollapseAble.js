import { useState } from 'react'
import { Icon } from '@iconify/react'

function Collapse({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  function handleClick() {
    setIsCollapsed(!isCollapsed)
  }

  const hasChildren = !!children

  return (
    <div className="overflow-hidden  ">
      <div
        className="flex items-center justify-between px-4 py-4 cursor-pointer select-none"
        onClick={handleClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {hasChildren && (
          <Icon
            icon={'mdi:chevron-down'}
            width={24}
            className="  text-gray-500 transition-transform duration-300 transform"
            style={{ transform: isCollapsed ? '' : 'rotate(-180deg)' }}
          />
        )}
      </div>
      {hasChildren && (
        <div
          className={`${
            isCollapsed ? 'max-h-[0px]' : 'max-h-[100vh]'
          } transition-height duration-300 ease-in-out`}
        >
          <div className="px-4 pr-6  py-2">
            <div className="border-r pr-2">{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Collapse
