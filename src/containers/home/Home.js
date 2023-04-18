import Button from '@/components/form/button/Button'
import LandCardItem from '@/components/land-card/LandCardItem'
import { ApiConstants } from '@/constants'
import useRequestLand from '@/hooks/api-handlers/land/useRequestLand'
import useAlert from '@/hooks/notification/useAlert'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Home = ({ lands }) => {
  const { isLoading, submit, setIsLoading } = useRequestLand()
  const { success, error } = useAlert()
  const movmentEl = useRef(null)
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      const element = movmentEl.current
      if (element) {
        const width = element.offsetWidth
        const height = element.offsetHeight
        const dx =(y - height / 2) / height
        const dy =  (x - width / 2) / width
        element.style.backgroundPosition = `${dx * 5}px ${dy * 5}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className=" w-full ">
      <div className="  w-full relative  overflow-hidden  ">
        <div className="absolute top-0 left-0  w-full h-full animate-pulse ">
          <img src="/assets/img/animate-star.png" height="100%" alt="" />
        </div>
        {/* hello slider */}
        <div className="w-full  z-10 flex relative container-lg py-20">
          <div
            ref={movmentEl}
            className="w-1/2 bg-[url('/assets/img/tuch-ai.png')] bg-cover bg-100 "
            style={{
              backgroundSize: '83%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
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
            {lands.map((item) => (
              <LandCardItem key={item.uuid} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
