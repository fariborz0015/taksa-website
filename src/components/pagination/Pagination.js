import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const Pagination = ({
  totalPage = 1,
  pageSize = 10,
  pageNumber = 1,
  total = 5,
}) => {
  const pages = Array(totalPage)
    .fill()
    .map((_, idx) => 1 + idx)

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
          {pages.slice(pageNumber - 1, 3).map((item) => {
            return (
              <li key={item}>
                <Link
                  href={'/events?page=' + item}
                  class={`block h-full px-4 py-2 ml-0  text-gray-500 bg-white   hover:bg-primary hover:text-white ${
                    pageNumber == item ? '!bg-primary !text-white' : ''
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          })}
          {pages.length > 8 && (
            <li>
              <div class="block h-full px-4 py-2 ml-0  text-gray-500 bg-white   hover:bg-primary hover:text-white ">
                ...
              </div>
            </li>
          )}

          {pages.length > 8 &&
            pages.slice(16, pages.length - 1).map((item) => (
              <li key={item}>
                <Link
                  href={'/events/?page=' + item}
                  class={`block h-full px-4 py-2 ml-0  text-gray-500 bg-white   hover:bg-primary hover:text-white ${
                    pageNumber == item ? '!bg-primary !text-white' : ''
                  }`}
                >
                  {item}
                </Link>
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
