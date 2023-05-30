import { Icon } from '@iconify/react'
import React from 'react'

const Pagination = () => {
  const pages = Array(8).fill(1)
  return (
    <div className="w-full flex justify-center mt-10" dir="ltr">
      <nav className="h-10">
        <ul class="inline-flex items-center -space-x-px h-full">
          <li className="h-full">
            <button
              href="#"
              class="block h-full px-3 py-2 ml-0  text-gray-500 bg-white  rounded-l-lg hover:bg-primary hover:text-white    "
            >
              <span class="sr-only">Previous</span>
              <Icon icon="ic:round-chevron-left" width={20} />
            </button>
          </li>
          {pages.map((_, index) => (
            <li key={index}>
              <a
                href="#"
                class="block h-full px-4 py-2 ml-0  text-gray-500 bg-white   hover:bg-primary hover:text-white "
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className="h-full">
            <button
              href="#"
              class="block h-full px-3 py-2 ml-0  text-gray-500 bg-white  rounded-r-lg hover:bg-primary hover:text-white    "
            >
              <span class="sr-only">Previous</span>
              <Icon icon="ic:round-chevron-right" width={20} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
