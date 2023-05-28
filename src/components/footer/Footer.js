import React from 'react'

const Footer = () => {
  return (
    <div className="text-white">
      {/* big footer */}
     
      {/* small footer */}
      <div className="bg-primaryLowDark py-8 px-8">
        <div className="container-lg">
          <div className="w-full">
            <div className=" grid grid-cols-12 xs:mb-12 md:mb-9 lg:mb-0">
              <div className="xs:col-span-12 md:col-span-4 md:pl-12">
                <div className="flex flex-col">
                  <h1 className="font-medium xs:text-base md:text-xl text-grey-900 xs:mb-6 md:mb-9 xs:pr-4 md:pr-0">
                    راه های ارتباطی
                  </h1>
                  <div className="xs:mb-6 md:mb-4 xs:pl-8 md:pl-0 xs:pr-4 md:pr-0">
                    <p className="font-normal xs:text-sm md:text-base text-grey-800 mb-1">
                      تلفن پشتیبانی: 1536
                    </p>
                    <p className="font-normal xs:text-sm md:text-base text-grey-800 mb-1">
                      آدرس: خیابان احمد قصیر - کوچه اول - پلاک ۴{' '}
                    </p>
                    <p className="font-normal xs:text-sm md:text-base text-grey-800 mb-1">
                      ایمیل: info@okala.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="xs:col-span-6 md:col-span-2 mb-9">
                <div className="flex flex-col">
                  <h1 className="font-medium xs:text-base md:text-xl text-grey-900 mb-9 xs:pr-4 md:px-0">
                    اکسپو ورس
                  </h1>
                  <ul className="xs:pr-4 md:px-0">
                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        href="https://blog.okala.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        بلاگ
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        rel="nofollow"
                        href="#"
                      >
                        تماس با ما
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        rel="nofollow"
                        href="#"
                      >
                        درباره ما
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs:col-span-6 md:col-span-3">
                <div className="flex flex-col">
                  <h1 className="font-medium xs:text-base md:text-xl text-grey-900 mb-9 xs:pr-4 md:pr-0">
                    خدمات مشتریان
                  </h1>
                  <ul className="xs:pr-4 md:pr-0">
                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        rel="nofollow"
                        href="#"
                      >
                        شرایط عضویت
                      </a>
                    </li>
                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        rel="nofollow"
                        href="/content/faq"
                      >
                        سوالات متداول
                      </a>
                    </li>

                    <li className="mb-4">
                      <a
                        className="hover:text-teal-600 focus:text-teal-600 xs:text-sm md:text-base xs:font-normal"
                        rel="nofollow"
                        href="#"
                      >
                        حریم خصوصی
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs:col-span-12 md:col-span-3"> 
                <div
                  className="flex justify-center items-start col-span-2     rounded-xl border-grey-200"
                  style={{ height: 100, width: '100%' }}
                >
                  <img
                    src="/assets/img/logo.png"
                    alt="samandehi logo"
                    width={'90%'}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
