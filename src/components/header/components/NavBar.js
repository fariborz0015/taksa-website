import { Icon } from '@iconify/react'
import React from 'react'

const NavBar = () => {
  const navItems = [
    {
      id: 1,
      title: 'معرفی اکسپو ورس',
    },
    {
      id: 1,
      title: 'سرزمین های نمایشگاهی ',
    },
    {
      id: 1,
      title: 'برای کسب و کار ها',
    },

    {
      id: 1,
      title: ' یرای بازدید کنندگان ',
    },
    {
      id: 1,
      title: ' تماس با ما ',
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
