import EventsLayout from '@/containers/events/EventsLayout'
import React from 'react'

const EventDetail = () => {
  return (
    <EventsLayout>
      <div className="w-full bg-white p-4 rounded-lg">
        <div className="w-full justify-center flex overflow-hidden ">
          <img
            className="w-full object-cover "
            src="https://jumpx-react.envytheme.com/images/blog/blog1.png"
          />
        </div>

        <div className="w-full">
          <h1 className="w-full text-black font-bold text-xl mt-4">
            عنوان یک رویداد واقعی
          </h1>
          <div className="my-8 !text-caption">
            {' '}
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>
        </div>
      </div>
    </EventsLayout>
  )
}

export default EventDetail
