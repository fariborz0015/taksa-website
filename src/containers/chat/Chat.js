import ChatMessageList from '@/containers/chat/components/ChatMessageList'
import ChatUserList from '@/containers/chat/components/ChatUserList'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const Chat = () => {
 
  return (
    <div className="flex h-screen antialiased text-gray-800 container max-h-[600px]">
      <div className="flex flex-row h-full w-full overflow-x-hidden relative">
        <ChatUserList   />
       
          <ChatMessageList   />
 
      
      
      </div>
    </div>
  )
}

export default Chat
