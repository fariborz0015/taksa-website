import useGetLandList from "@/hooks/api-handlers/land/useGetLandList";
import { getCharacterColor } from "@/utils/helper";
import React from "react";

const ChatUserList = () => {
  return (
    <div className="flex flex-col py-8 px-4 w-64 bg-white flex-shrink-0 rounded-lg ">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="mr-2 font-bold text-2xl">گفتگو</div>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          <button
            className={`flex flex-row items-center rounded-xl p-2  
             bg-primary !text-white 
             `}
          >
            <div
              className={`flex items-center justify-center h-8 w-8 bg-gray-200 text-gray-900  rounded-full`}
            >
              پ
            </div>
            <div className="mr-2 text-sm font-semibold">پشتیبانی </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUserList;
