import AnimateOnScroll from '@/components/animate-on-scroll/AnimateOnScroll'
import CustomerItem from '@/components/customer-item/CustomerItem'
import Button from '@/components/form/button/Button'
import LandCardItem from '@/components/land-card/LandCardItem'
import Slider from '@/components/slider/Slider'
import { ApiConstants } from '@/constants'
import {
  LTRslideInAnimation,
  RTLslideInAnimation,
  fadeInAnimation,
} from '@/constants/animations'
import useRequestLand from '@/hooks/api-handlers/land/useRequestLand'
import useAlert from '@/hooks/notification/useAlert'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

const Home = ({ lands }) => {
  const { isLoading, submit, setIsLoading } = useRequestLand()
  const { success, error } = useAlert()
  const movmentEl = useRef(null)
  const customers = Array(7)
    .fill('1')
    .map((item, index) => ({
      src: '/assets/img/brand' + (index + 1) + '.png',
    }))

  console.log(customers)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX
      const y = event.clientY
      const element = movmentEl.current
      if (element) {
        const width = element.offsetWidth
        const height = element.offsetHeight
        const dx = (y - height / 2) / height
        const dy = (x - width / 2) / width
        element.style.backgroundPosition = `${dx * 5}px ${dy * 5}px`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className=" w-full overflow-x-hidden">
      <div className="  w-full relative  overflow-hidden  ">
        <div className="main-banner-area-four ">
          <div class="over-shape h-0">
            <img src="/assets/img/animate1.png" alt="Image" />
            <img src="/assets/img/animate1.png" alt="Image" />
            <img src="/assets/img/animate2.png" alt="Image" />
            <img src="/assets/img/animate2.png" alt="Image" />
            <img src="/assets/img/animate3.png" alt="Image" />
          </div>
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center  w-full h-full animate-fast-puls ">
          <img src="/assets/img/animate-star.png" height="100%" alt="" />
        </div>
        <div className="absolute top-0 left-0 flex justify-center items-center  w-full h-full   animate-soft-bunce ">
          <img src="/assets/img/animate-star.png" height="100%" alt="" />
        </div>
        {/* hello slider */}
        <div className="w-full   sm:flex-row flex-col-reverse z-10 flex relative container-lg py-20 ">
          <div className="    !bg-cover   sm:h-96 h-80  sm:mt-0 mt-20">
            <AnimateOnScroll
              varient={{
                ...RTLslideInAnimation,
                transition: { duration: 1, delay: 0.5 },
              }}
            >
              <img
                src="/assets/img/tuch-ai.png"
                className="w-11/12 h-11/12"
                alt=""
              />
            </AnimateOnScroll>
          </div>
          <div className="sm:w-1/2 p-4 sm:p-0 flex justify-center items-center">
            <div className="sm:max-w-xl">
              <AnimateOnScroll
                varient={{
                  ...fadeInAnimation,
                  transition: { duration: 1, delay: 0.5 },
                }}
              >
                <h1 className="sm:text-4xl text-xl text-white font-bold ">
                  اکسپوورس، نسل بعدی نمایشگاه مجازی با فناوری متاورس
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll
                varient={{
                  ...fadeInAnimation,
                  transition: { duration: 1, delay: 0.5 },
                }}
              >
                <p className="text-white mt-10 sm:text-base text-xs">
                  فارغ از محدودیت های دنیای واقعی برای کسب و کار خود نمایشگاه سه
                  بعدی برگزار کنید، محصولات خود را معرفی کنید، با مشتریان خود
                  ارتباط برقرار کنید.
                </p>
              </AnimateOnScroll>
              <div className="w-full flex space-x-reverse space-x-4 mt-16 justify-end">
                <AnimateOnScroll
                  varient={{
                    ...fadeInAnimation,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                >
                  <Button className="sm:px-9 px-6 max-w-fit  py-4 hover:bg-primary transition-all bg-primaryLight rounded-xl flex items-center space-x-4 space-x-reverse  text-white ">
                    <span> اطلاعات بیشتر </span>
                  </Button>
                </AnimateOnScroll>
                <AnimateOnScroll varient={fadeInAnimation}>
                  <Link href="/request" className="flex-1">
                    <Button
                      title={'برای درخواست نمایشگاه کلیک کن !'}
                      className="sm:!w-fit flex-1  sm:px-9 text-xs sm:text-base py-4 cursor-pointer hover:bg-primaryLight transition-all bg-white hover:!text-white rounded-xl flex items-center space-x-4 space-x-reverse  !text-primaryLight "
                    ></Button>
                  </Link>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primaryDark  mt-10 pt-10 sm:px-0 p-6">
        <h1 className="w-full container-lg text-center font-bold text-2xl text-white">
          مشتریان ما
        </h1>
        <div className="w-full flex sm:flex-row flex-col-reverse items-center  container-lg  py-10">
          <Slider
            ItemComponent={CustomerItem}
            dataKeyProps="item"
            items={customers}
          />
        </div>
      </div>

      <div className="w-full bg-primaryDark    pt-10 sm:px-0 px-6">
        <div className="w-full flex sm:flex-row flex-col-reverse items-center  container-lg py-20">
          <AnimateOnScroll
            className={'flex-1'}
            varient={{
              ...RTLslideInAnimation,
              transition: { duration: 1, delay: 1 },
            }}
          >
            <div className="  flex justify-center items-center sm:mt-0 mt-20">
              <img src="/assets/img/about-img.png" alt="" />
            </div>
          </AnimateOnScroll>
          <div className="sm:w-1/2">
            <div className="w-full">
              <AnimateOnScroll
                varient={{
                  ...fadeInAnimation,
                  transition: { duration: 1, delay: 1 },
                }}
              >
                <h1 className="text-4xl text-white font-bold">
                  در دنیای نمایشگاه های مجازی متاورس، در آینده غوطه ور شوید
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll
                varient={{
                  ...LTRslideInAnimation,
                  transition: { duration: 1.2, delay: 1.5 },
                }}
              >
                <p className="text-white mt-10 text-justify">
                  به ویراورس خوش آمدید. پلت فرم ما شما را به سرزمین های
                  نمایشگاهی فراتر از مرزهای واقعیت می برد. نمایشگاه ها را کاوش
                  کنید، محصولات مورد نیاز خود را بیابید، در همایش ها شرکت کنید و
                  با غرفه ها و سایر شرکت کنندگان ارتباط داشته باشید. <br />
                  حتی می توانید سرزمین نمایشگاهی خود را داشته باشید و دسترسی
                  مشتریانتان را فراتر از زمان و مکان گسترش دهید. موانع موقعیت
                  مکانی را بشکنید و مخاطبین را از هرکجای جهان جذب کنید.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll
                varient={{
                  ...LTRslideInAnimation,
                  transition: { duration: 1, delay: 1 },
                }}
              >
                <div className="w-full grid grid-cols-2 mt-10 gap-4 text-sm">
                  <div className="w-full flex space-x-4 space-x-reverse">
                    <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                      <Icon
                        icon="ic:baseline-check-circle-outline"
                        width={20}
                        color="var(--color-primaryLight)"
                      />
                    </span>
                    <span className="text-white ">
                      حضور کاربران با آواتار مجازی
                    </span>
                  </div>
                  <div className="w-full flex space-x-4 space-x-reverse">
                    <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                      <Icon
                        icon="ic:baseline-check-circle-outline"
                        width={20}
                        color="var(--color-primaryLight)"
                      />
                    </span>
                    <span className="text-white ">
                      چت، ارتباط صوتی و متنی با غرفه ها
                    </span>
                  </div>
                  <div className="w-full flex space-x-4 space-x-reverse">
                    <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                      <Icon
                        icon="ic:baseline-check-circle-outline"
                        width={20}
                        color="var(--color-primaryLight)"
                      />
                    </span>
                    <span className="text-white ">
                      پشتیبانی از تمامی دستگاه ها
                    </span>
                  </div>
                  <div className="w-full flex space-x-4 space-x-reverse">
                    <span className=" w-6 h-6 bg-white rounded-full flex justify-center items-center">
                      <Icon
                        icon="ic:baseline-check-circle-outline"
                        width={20}
                        color="var(--color-primaryLight)"
                      />
                    </span>
                    <span className="text-white ">
                      سالن های همایش و کلاس های متاورسی
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-primaryLowDark relative pb-32 pt-10 min-h-[400px] ">
        <div className="  absolute right-0 top-0 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>
        <div className="  absolute left-0 transofrm rotate-180 bottom-1 opacity-40">
          <img src="/assets/img/corner.png" alt="" />
        </div>

        <div className="w-full container-lg mx-auto">
          <AnimateOnScroll
            varient={{
              ...RTLslideInAnimation,
              transition: { duration: 1, delay: 1 },
            }}
          >
            <h1 className="text-white text-3xl font-bold text-center">
              خدمات تات
            </h1>
            <AnimateOnScroll>
              <p className="text-lg text-white mx-auto sm:max-w-5xl text-center">
                با نمایشگاه مجازی تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا
                .. خود را با کمترین زحمت بسازید و به نمایش عمو با نمایشگاه مجازی
                تات شما میتوانید نمایشگاه هنری ، تکنولوژی و یا .. خود را با
                کمترین زحمت بسازید و به نمایش عمو
              </p>
            </AnimateOnScroll>
          </AnimateOnScroll>
          <AnimateOnScroll
            varient={{
              ...fadeInAnimation,
              transition: { duration: 1.5, staggerChildren: 1.5 },
            }}
          >
            <div className="w-full grid gap-6 sm:grid-cols-3 grid-cols-1 sm:px-0 px-6 mt-16">
              {[',', ',', ',', '', ',', ','].map((item, index) => (
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
          </AnimateOnScroll>
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
          <AnimateOnScroll
            varient={{
              ...LTRslideInAnimation,
              transition: { duration: 1, staggerChildren: 1 },
            }}
          >
            <h1 className="text-white text-3xl font-bold text-center">
              نمایشگاه های تات
            </h1>
            <AnimateOnScroll
              varient={{
                ...RTLslideInAnimation,
                transition: { duration: 1, staggerChildren: 1 },
              }}
            >
              <p className="text-lg text-white mx-auto sm:max-w-5xl text-center">
                نمایشگاه های زیر نمایشگاه هایی هستند که کاربران می توانند به
                راحتی وارد انها شده و از محیط این نمایش گاه ها دیدن کنند
              </p>
            </AnimateOnScroll>
          </AnimateOnScroll>
          <AnimateOnScroll
            varient={{
              ...RTLslideInAnimation,
              transition: { duration: 1, staggerChildren: 1 },
            }}
          >
            <div className="w-full grid gap-6 sm:grid-cols-3 grid-cols-1 sm:px-0 px-6 mt-16">
              {lands.map((item) => (
                <AnimateOnScroll
                  key={item.uuid}
                  varient={{
                    ...RTLslideInAnimation,
                    transition: { duration: 1, staggerChildren: 1 },
                  }}
                >
                  <LandCardItem item={item} />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  )
}

export default Home
