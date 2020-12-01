import React from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'

const messages = ['lol', 'TMT', 'i dont even know', 'why are we here, just to suffer']
const ChatList = () => {
  return (
    <div>
      {messages.map(message => (
        <ChatMessage message={message} />
      ))}
    </div>
  )
}

export default ChatList
