import Button from '@/components/form/button/Button'
import useRequestLand from '@/hooks/api-handlers/land/useRequestLand'
import useAlert from '@/hooks/notification/useAlert'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  const { isLoading, submit, setIsLoading } = useRequestLand()
  const { success, error } = useAlert()
  const LANDSlIST = [
    {
      id: '1',
      title: ' نمایشگاه متاورس آثار استاد یدالله کابلی',
      brief:
        ' شرکتت ویراورس ضمن آرزوی طول عمر برای این استاد بی بدیل، افتخار دارد که آثار ارزشمند ایشان را برای نخستین بار در دنیای متاورس در معرض دید عموم قرار داده است. ',
      img: '/assets/img/kaboli.png',
      link: 'http://185.18.214.5/gallery',
    },
    {
      id: '1',
      title: ' نمایشگاه متاورس جهاد کشاورزی',
      brief:
        ' شرکت ویراورس برای نمایش دستاورد های ارزشمند جهاد کشاورزی برای نخستین بار از دنیای متاورس برای این فرایند استفاده میکند  ',
      img: '/assets/img/keshavarzi.png',
      link: 'http://185.18.214.5/',
    },
    {
      id: '1',
      title: ' نمایشگاه متاورس        ',
      brief:
        ' شرکتت ویراورس ضمن آرزوی طول عمر برای این استاد بی بدیل، افتخار دارد که آثار ارزشمند ایشان را برای نخستین بار در دنیای متاورس در معرض دید عموم قرار داده است. ',
      img: '/assets/img/sabz.png',
      link: 'http://185.18.214.5/',
    },
  ]
  return (
    <div className=" w-full ">
      <div className="  w-full relative  overflow-hidden  ">
        <div className="absolute top-0 left-0  w-full h-full animate-pulse ">
          <img src="/assets/img/animate-star.png" height="100%" alt="" />
        </div>
        {/* hello slider */}
        <div className="w-full  z-10 flex relative container-lg py-20">
          <div className="w-1/2">
            <img src="/assets/img/tuch-ai.png" alt="" />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl text-white font-bold">
                نمایشگاه مجازی تات ، آینده نمایشگاه های فیزیکی و حضوری !
              </h1>
              <p className="text-white mt-10">
                با نمایشگاه مجازی تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا
                .. خود را با کمترین زحمت بسازید و به نمایش عموم بگذارید !!
              </p>
              <div className="w-full flex space-x-reverse space-x-4 mt-16 justify-end">
                <button className="px-9 py-4 hover:bg-primary transition-all bg-primaryLight rounded-xl flex items-center space-x-4 space-x-reverse  text-white ">
                  <span> دانستن بیشتر </span>
                </button>
                <Link href="/request">
                  <Button
                    title={'برای درخواست نمایشگاه کلیک کن !'}
                    className="!w-fit  px-9 py-4 cursor-pointer hover:bg-primaryLight transition-all bg-white hover:!text-white rounded-xl flex items-center space-x-4 space-x-reverse  !text-primaryLight "
                  ></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primaryDark  mt-10 pt-10">
        <div className="w-full flex items-center  container-lg py-20">
          <div className="w-1/2 flex justify-center items-center">
            <img src="/assets/img/about-img.png" alt="" />
          </div>
          <div className="w-1/2">
            <div className="sm:max-w-xl">
              <h1 className="text-4xl text-white font-bold">
                نمایشگاه مجازی تات ، آینده نمایشگاه های فیزیکی و حضوری !
              </h1>
              <p className="text-white mt-10">
                با نمایشگاه مجازی تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا
                .. خود را با کمترین زحمت بسازید و به نمایش عموم بگذارید !! با
                نمایشگاه مجازی تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا ..
                خود را با کمترین زحمت بسازید و به نمایش عموم بگذارید !!
              </p>
              <div className="w-full grid grid-cols-2 mt-10 gap-4">
                <div className="w-full flex space-x-4 space-x-reverse">
                  <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                    <Icon
                      icon="ic:baseline-check-circle-outline"
                      width={20}
                      color="var(--color-primaryLight)"
                    />
                  </span>
                  <span className="text-white ">با نمایشگاه مجازی تات شما</span>
                </div>
                <div className="w-full flex space-x-4 space-x-reverse">
                  <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                    <Icon
                      icon="ic:baseline-check-circle-outline"
                      width={20}
                      color="var(--color-primaryLight)"
                    />
                  </span>
                  <span className="text-white ">با نمایشگاه مجازی تات شما</span>
                </div>
                <div className="w-full flex space-x-4 space-x-reverse">
                  <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                    <Icon
                      icon="ic:baseline-check-circle-outline"
                      width={20}
                      color="var(--color-primaryLight)"
                    />
                  </span>
                  <span className="text-white ">با نمایشگاه مجازی تات شما</span>
                </div>
                <div className="w-full flex space-x-4 space-x-reverse">
                  <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                    <Icon
                      icon="ic:baseline-check-circle-outline"
                      width={20}
                      color="var(--color-primaryLight)"
                    />
                  </span>
                  <span className="text-white ">با نمایشگاه مجازی تات شما</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primaryLowDark relative pb-32 pt-10 min-h-[400px]">
        <div className="  absolute right-0 top-0 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>
        <div className="  absolute left-0 transofrm rotate-180 bottom-1 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>

        <div className="w-full container-lg mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">
            خدمات تات
          </h1>
          <p className="text-lg text-white mx-auto sm:max-w-5xl text-center">
            با نمایشگاه مجازی تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا ..
            خود را با کمترین زحمت بسازید و به نمایش عمو با نمایشگاه مجازی تات
            شما میتوانید نمایشگاه هنری ، تکنولوژی و یا .. خود را با کمترین زحمت
            بسازید و به نمایش عمو
          </p>

          <div className="w-full grid gap-6 grid-cols-3 mt-16">
            {[',', ',', ',', '', ',', ',', ',', ',', ''].map((item) => (
              <div className="w-full rounded-xl bg-white min-h-[250px] p-16">
                <span className="mx-auto w-16 h-16 flex justify-center items-center rounded-full bg-[#e8f3fd] ">
                  <Icon
                    icon="mdi:emoji-excited-outline"
                    width={32}
                    color="var(--color-primary)"
                    className="opacity-50"
                  />
                </span>

                <div className="text-black mt-2 font-bold text-lg mx-auto text-center w-full  ">
                  همیشه شاد باشید و خوشحال
                </div>
                <p className="text-black ">
                  لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم
                  لورم اپیسوم
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-primaryDark relative pb-32 pt-10 min-h-[400px]">
        <div className="  absolute right-0 top-0 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>
        <div className="  absolute left-0 transofrm rotate-180 bottom-1 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>

        <div className="w-full container-lg mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">
            نمایشگاه های تات
          </h1>
          <p className="text-lg text-white mx-auto sm:max-w-5xl text-center">
            نمایشگاه های زیر نمایشگاه هایی هستند که کاربران می توانند به راحتی
            وارد انها شده و از محیط این نمایش گاه ها دیدن کنند
          </p>

          <div className="w-full grid gap-6 grid-cols-3 mt-16">
            {LANDSlIST.map((item) => (
              <Link href={item.link}>
                <div
                  className="w-full rounded-xl bg-white min-h-[250px] "
                  key={item.id}
                >
                  <div className="mx-auto rounded-t-xl    overflow-hidden  flex justify-center items-center   bg-[#e8f3fd] ">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="p-8">
                    <div className="text-black mt-2 font-bold text-lg mx-auto text-right w-full  ">
                      {item.title}
                    </div>
                    <p className="  text-caption mt-2">{item.brief}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
