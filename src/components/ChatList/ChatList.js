import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ChatMessage from '../ChatMessage/ChatMessage'

const ChatList = () => {
  const livechat = useSelector(state => state.livechat)

  const ChatWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;
  `

  // Note: wrapping content in a ChatWrapper AND  an extra div to get the css for ChatWrapper to work.
  // This basically is a performant way to ensure the bottom of the chat list is always shown when its updated.
  return (
    <ChatWrapper>
      <div>
        {livechat.chatMessages.map(({ chatMessage, authorPhotoNode, authorName }) => (
          <ChatMessage author={authorName} avatarSrc={authorPhotoNode.src} chatMessage={chatMessage} />
        ))}
      </div>
    </ChatWrapper>
  )
}

export default ChatList
