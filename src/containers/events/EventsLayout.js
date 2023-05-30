import Pagination from '@/components/pagination/Pagination'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const EventsLayout = ({ children }) => {
  const router = useRouter()
  console.log(router)
  return (
    <div className="w-full pb-10 ">
      <div className="w-full container">
        <div className="w-full  my-4 py-4 text-white text-center">
          <h1 className="text-2xl font-extrabold">رویداد ها</h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 ">
          <div className="w-full col-span-2 ">{children}</div>
          <div className="w-full col-span-1     ">
            <div className="w-full ">
              <div className="w-full h-10 border-r-4 border-primaryLight items-center flex  px-4 text-lg">
                جستجو
              </div>
              <div className="w-full p-4 bg-white flex gap-4 rounded-lg mt-2">
                <button className="w-10 h-10 flex items-center rounded-lg bg-primaryLight text-white justify-center">
                  <Icon icon={'mdi:search'} />
                </button>
                <input
                  type="text"
                  className="h-10 border rounded bg-white flex-1"
                />
              </div>
            </div>
            <div className="w-full sm:mt-14 mt-8">
              <div className="w-full h-10 border-r-4 border-primaryLight flex items-center   px-4 text-lg">
                رویداد های پر طرفدار
              </div>
              <div className="w-full p-4 divide-y  bg-white flex flex-col   rounded-lg mt-2">
                {Array(6)
                  .fill(1)
                  .map((_, index) => (
                    <article className="flex gap-4 py-2" key={index}>
                      <div className="w-20">
                        <Link href="/news-details/">
                          <img
                            className="rounded w-full h-full object-fit"
                            src="https://jumpx-react.envytheme.com/images/blog/blog1.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className=" flex-1 h-full flex flex-col justify-between">
                        <time className="text-caption"> 28 مهر - 12:22</time>
                        <h4 className="title usmall ">
                          <a href="/news-details/" className="text-black text">
                            ا غرفه ها و سایر شرکت کنندگان ارتباط داشته باشید.
                            حتی می توانید سرزمین ....
                          </a>
                        </h4>
                      </div>
                    </article>
                  ))}
              </div>
            </div>

            <div className="w-full sm:mt-14 mt-8">
              <div className="w-full h-10 border-r-4 border-primaryLight  flex items-center  px-4 text-lg">
                تگ ها
              </div>
              <div className="w-full p-4 bg-white flex flex-wrap   gap-4 rounded-lg mt-2 group">
                {Array(8)
                  .fill(1)
                  .map((_, index) => (
                    <button className="hover:bg-primaryLight transition-all hover:text-white  border rounded-lg text-caption py-2 px-4 ">
                      تگ مثال ({index})
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {!router.query.id && <Pagination />}
    </div>
  )
}

export default EventsLayout
