import Button from "@/components/form/button/Button";
import ChatMessageItem from "@/containers/chat/components/ChatMessageItem";

import useGetSupportChatMessages from "@/hooks/api-handlers/chat/useGetSupportChatMessages";
import useSendChatMessage from "@/hooks/api-handlers/chat/useSendChatMessage";
import useUpdateQuery from "@/hooks/api-handlers/update-query/useUpdateQuery";
import { Icon } from "@iconify/react";
import React, { useEffect, useRef } from "react";

const ChatMessageList = () => {
  const updateQuery = useUpdateQuery();
  const messagesHook = useGetSupportChatMessages();
  const sendMessageHook = useSendChatMessage();

  const sendMessageHandler = () => {
    if (sendMessageHook.data.text?.length > 0) {
      sendMessageHook
        .submit()
        .then((res) => {
          sendMessageHook.setData({ text: "" });

          updateQuery.update(messagesHook.key);
        })
        .catch((err) => {
          console.log("error", err.response);
        })
        .finally(() => {
          sendMessageHook.setIsLoading(false);
        });
    }
  };
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollTop !== scrollRef.current.scrollHeight) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }
    };
    scrollMessagesToBottom();
  }, [messagesHook?.data?.messages?.length]);

  return (
    <div className="flex flex-col flex-auto h-full  px-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <div className="  w-full border-b  ">
          <div className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 ">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white flex-shrink-0">
              پ
            </div>
            <div className="mr-2 text-sm font-semibold">پشتیبانی</div>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex flex-col h-full overflow-x-auto mb-4 relative"
        >
          <div className="flex flex-col h-full">
            <div className=" flex   flex-col-reverse">
              {messagesHook.isLoading ? (
                <Shimmer />
              ) : messagesHook?.data?.messages?.length > 0 ? (
                messagesHook?.data?.messages?.map((item, index) => (
                  <ChatMessageItem item={item} key={index} />
                ))
              ) : (
                <div className="flex flex-col flex-auto h-full  px-6">
                  <div className="flex  items-center justify-center flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div className="h-full w-full  flex  items-center justify-center flex-col">
                      <div className="w-full opacity-25 max-h-fit   flex  items-center justify-center flex-col">
                        <Icon icon={"arcticons:libremchat"} width={"40%"} />
                      </div>
                      <span className="mt-4 text-lg text-gray-500 font-bold ">
                        لطفا مشکل خود را به شکل کامل بیان کنید
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessageHandler();
          }}
          className="flex flex-row items-center h-16 rounded-xl  border-t pt-1 w-full px-4"
        >
          <div className="ml-4">
            <Button
              isLoading={sendMessageHook.isLoading}
              type="submit"
              className="flex items-center justify-center !bg-primary  rounded-xl !w-16 !h-10"
            >
              <span className="">
                <Icon icon="material-symbols:send" color="white" width={24} />
              </span>
            </Button>
          </div>
          <div className="flex-grow  ">
            <div className="relative w-full">
              <input
                onChange={(e) =>
                  sendMessageHook.setData({ text: e.target.value })
                }
                value={sendMessageHook.data.text}
                type="text"
                className="flex w-full  text-white bg-gray-700 px-4 rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatMessageList;

const Shimmer = () => {
  return (
    <>
      {Array.from(new Set(Array.from({ length: 10 }, (_, i) => i + 1))).map(
        (item) => (
          <div className="col-start-1 col-end-8 p-3 rounded-lg animate-shimmer">
            <div
              className={`flex flex-row items-center ${
                item % 2 == 0 && "justify-start flex-row-reverse"
              }`}
            >
              {item % 2 == 0 && (
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              )}
              <div
                className={`relative  ${
                  item % 2 == 0 ? "ml-3" : "mr-3"
                } text-sm bg-gray-200 py-2 px-4 shadow rounded-xl w-1/2`}
              >
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 mt-2 w-40 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
