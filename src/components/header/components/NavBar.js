import DropDown from '@/components/dropdown/DropDown'
import { NAV_ITEMS } from '@/constants'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <ul className=" h-full items-center sm:flex hidden space-x-8 space-x-reverse mx-auto flex-col sm:flex-row ">
      {NAV_ITEMS.map((item) => (
        <Link href={item?.href ?? '#'}>
          {item?.children?.length > 0 ? (
            <DropDown
              title={
                <li
                  className="font-bold text-base text-white cursor-pointer flex gap-2"
                  key={item.key}
                >
                  <span className=""> {item.title}</span>
                  <Icon icon={'tabler:chevron-down'} width={24} />
                </li>
              }
            >
              {item?.children?.length &&
                item?.children?.map((child) => (
                  <a
                    href={''}
                    className="block text-sm p-3 border hover:bg-gray-200 font-medium text-gray-900 rounded-md   hover:text-gray-900"
                  >
                    {child.title}
                  </a>
                ))}
            </DropDown>
          ) : (
            <li
              className="font-bold text-base text-white cursor-pointer flex"
              key={item.key}
            >
              <span className=""> {item.title}</span>
            </li>
          )}
        </Link>
      ))}
    </ul>
  )
}

export default NavBar
