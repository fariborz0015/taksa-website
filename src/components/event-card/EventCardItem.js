import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const EventCardItem = () => {
  return (
    <div className="w-full bg-white overflow-hidden relative group rounded-xl">
      <div className="h-12 absolute transition-all duration-300 flex rounded-br-xl items-center justify-center bg-primaryLight px-4 w-fit -left-full top-0 group-hover:left-0 text-white">
        24 مهر
      </div>
      <Link href="/events/1">
        <div className="w-full h-auto max-w-[400] overflow-hidden bg-[#e4f3fe] ">
          <img
            src="https://jumpx-react.envytheme.com/images/blog/blog1.png"
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="w-full h-auto px-10 pt-10 pb-5">
        <div className="w-full flex gap-4 ">
          <span className="flex gap-2">
            <span>
              <Icon
                icon={'formkit:time'}
                width={24}
                color="var(--color-primaryLight)"
              />
            </span>
            <span className="font-light text-black">15:45</span>
          </span>
          <span className="flex gap-2">
            <span>
              <Icon
                icon={'fontisto:date'}
                width={24}
                color="var(--color-primaryLight)"
              />
            </span>
            <span className="font-light text-black">24 مهر</span>
          </span>
        </div>
        <Link href="/events/1">
          <div className="w-full mt-4">
            <h1 className="text-xl font-bold text-black">یک رویداد واقعی </h1>
            <p className="text-sm text-caption text-justify">
              به ویراورس خوش آمدید. پلت فرم ما شما را به سرزمین های نمایشگاهی
              فراتر از مرزهای واقعیت می برد. نمایشگاه ها را کاوش کنید، محصولات
              مورد نیاز خود را بیابید، در همایش ها شرکت کنید و با غرفه ها و سایر
              شرکت کنندگان ارتباط داشته باشید. حتی می توانید سرزمین نمایشگاهی
              خود را داشته باشید
            </p>
          </div>
        </Link>
        <div className="flex justify-end mt-4">
          <button className="border rounded-lg py-3 px-6 text-black  left-0 hover:text-primaryLight hover:border-primaryLight transition-all">
            <span>بیشتر بدانید </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventCardItem
