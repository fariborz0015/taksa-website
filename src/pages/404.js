import Button from "@/components/form/button/Button";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <section class="bg-primaryDark">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl !text-white ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold  md:text-4xl  text-white">
            بنظر مشکلی پیش امده است
          </p>
          <p class="mb-4 text-lg font-light  text-right text-gray-300">
            متاسفانه ما نتوانستیم صفحه مورد نظر شمارا پیدا کنیم - ممکن است آدرسی
            که وارد کرده اید وجود نداشته باشد
          </p>
          <Link href="/">
            <Button className="max-w-sm mx-auto" href="/home">
              برگشت به صفحه اصلی
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
