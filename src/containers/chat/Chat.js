import ChatMessageList from '@/containers/chat/components/ChatMessageList'
import ChatUserList from '@/containers/chat/components/ChatUserList'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  return (
    <div className="flex h-screen antialiased text-gray-800 container max-h-[600px]">
      <div className="flex flex-row h-full w-full overflow-x-hidden relative">
        <ChatUserList userControl={{ selectedUser, setSelectedUser }} />
        {selectedUser != null ? (
          <ChatMessageList userControl={{ selectedUser, setSelectedUser }} />
        ) : (
          <div className="flex flex-col flex-auto h-full  px-6">
            <div className="flex  items-center justify-center flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="h-full w-full  flex  items-center justify-center flex-col">
                <div className="w-full opacity-25 max-h-fit   flex  items-center justify-center flex-col">
                  <Icon icon={'arcticons:libremchat'} width={'40%'} />
                </div>
                <span className="mt-4 text-lg text-gray-500 font-bold ">
                  لطفا یک گفتگو را انتخاب کنید
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Chat
