import { Icon } from '@iconify/react'
import React from 'react'

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      title: 'قیمت ها ',
    },
    {
      id: 1,
      title: 'لیست نمایشگاه ها  ',
    },
    {
      id: 1,
      title: 'درخواست سرزمین',
    },

    {
      id: 1,
      title: ' تماس با ما  ',
    },
    {
      id: 1,
      title: '  درباره ما  ',
    },
  ]
  return (
    <ul className=" h-full flex space-x-10 space-x-reverse mx-auto">
      {navItems.map((item) => (
        <li className="font-bold text-base text-white cursor-pointer flex" key={item.key}>
          {item.title}
          <Icon icon={'tabler:chevron-down'} width={24} />
        </li>
      ))}
    </ul>
  )
}

export default NavBar
