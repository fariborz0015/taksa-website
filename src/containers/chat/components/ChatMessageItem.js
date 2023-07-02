import React from 'react'

const ChatMessageItem = ({ item }) => {
  return (
    <>
      {item?.from == 'superAdmin' ? (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
          <div className="flex items-center justify-start flex-row-reverse">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white flex-shrink-0">
              {item.userSender.name?.[0]}
            </div>
            <div className="flex items-start flex-col">
              <div className="text-sm ml-4 font-bold text-gray-400 mr-2 mb-1 ">
                {item?.userSender.name + ' ' + item?.userSender.lastName}
              </div>
              <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                <div>{item.text}</div>
                <div className="  text-xs mt-1  text-gray-500">
                  {item.sendTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
          <div className="flex flex-row items-center">
            <div className="relative mr-3 text-sm bg-indigo-100 pt-2  px-4 shadow rounded-xl">
              <div>{item.text}</div>
              <div className="  text-xs mt-1  text-gray-500">
                {item.sendTime}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatMessageItem
