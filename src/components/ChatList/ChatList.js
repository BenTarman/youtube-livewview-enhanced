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

  const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    // Spacing between chat messages set here.
    div:not(:last-child) {
      margin-bottom: ${props => props.theme.fullscreen.chatMessageSpacing};
    }
  `

  // Note: wrapping content in a ChatWrapper AND  an extra div to get the css for ChatWrapper to work.
  // This basically is a performant way to ensure the bottom of the chat list is always shown when its updated.
  return (
    <ChatWrapper>
      <ChatContainer>
        {livechat.chatMessages.map(({ chatMessage, authorPhotoNode, authorName }) => {
          console.log(authorName)
          return <ChatMessage authorName={authorName} avatarSrc={authorPhotoNode.src} chatMessage={chatMessage} />
        })}
      </ChatContainer>
    </ChatWrapper>
  )
}

export default ChatList
