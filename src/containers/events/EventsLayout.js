import Pagination from "@/components/pagination/Pagination";
import { ApiConstants } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const EventsLayout = ({ children, popular }) => {
  const router = useRouter();

  const date = (date) => {
    let d = new Date(date);
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "medium",
    }).format(date);
  };

  return (
    <div className="w-full pb-10 ">
      <div className="w-full container">
        <div className="w-full  my-4 py-4 text-white text-center">
          <h1 className="text-2xl font-extrabold">رویداد ها</h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 ">
          <div className="w-full sm:col-span-2 col-span-full ">{children}</div>
          <div className="w-full sm:col-span-1 col-span-full sm:p-0 p-4    ">
            <div className="w-full ">
              <div className="w-full text-white h-10 border-r-4 border-primaryLight items-center flex  px-4 text-lg">
                جستجو
              </div>
              <div className="w-full p-4 bg-white flex gap-4 rounded-lg mt-2">
                <button className="w-10 h-10 flex items-center rounded-lg bg-primaryLight text-white justify-center">
                  <Icon icon={"mdi:search"} />
                </button>
                <input
                  type="text"
                  className="h-10 border rounded bg-white flex-1"
                />
              </div>
            </div>
            <div className="w-full sm:mt-14 mt-8">
              <div className="w-full h-10 border-r-4 text-white border-primaryLight flex items-center   px-4 text-lg">
                رویداد های پر طرفدار
              </div>
              <div className="w-full p-4 divide-y  bg-white flex flex-col   rounded-lg mt-2">
                {popular.length > 0 ? (
                  popular.map((item, index) => (
                    <article className="flex gap-4 py-2" key={index}>
                      <div className="w-20">
                        <Link href={"/events/" + item.uuid}>
                          <img
                            className="rounded w-full h-full object-fit"
                            src={
                              item?.media?.uuid
                                ? ApiConstants.eventMediaBaseUrl +
                                  item.media.uuid
                                : "/assets/img/blog1.png"
                            }
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className=" flex-1 h-full flex flex-col justify-between">
                        <time className="text-caption">
                          {date(item?.expirationTime)}
                        </time>
                        <h4 className="title usmall ">
                          <Link
                            href={"/events/" + item.uuid}
                            className="text-black text"
                          >
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="w-full text-center text-black">
                    هیچ محتوایی وجود ندارد
                  </div>
                )}
              </div>
            </div>

            {/* <div className="w-full sm:mt-14 mt-8">
              <div className="w-full h-10 border-r-4 text-white border-primaryLight  flex items-center  px-4 text-lg">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsLayout;
