import { NAV_ITEMS } from '@/constants'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <ul className=" h-full items-center sm:flex hidden space-x-10 space-x-reverse mx-auto flex-col sm:flex-row ">
      {NAV_ITEMS.slice(0, 4).map((item) => (
        <Link href={item?.href ?? '#'}>
          <li
            className="font-bold text-base text-white cursor-pointer flex"
            key={item.key}
          >
            {item.title}
            <Icon icon={'tabler:chevron-down'} width={24} />
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default NavBar
