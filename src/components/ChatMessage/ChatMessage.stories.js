import React from 'react'
import ChatMessage from './ChatMessage'

export default {
  title: 'ChatMessage',
  component: ChatMessage
}

export const FullscreenLiveviewOverlay = () => (
  <ChatMessage
    avatarSrc="https://yt3.ggpht.com/ytc/AAUvwngn_ZtDfYYF_LlERXSOsMxnvIEGHxM22iC08w=s32-c-k-c0x00ffffff-no-rj"
    authorName="Toby Lerone"
    chatMessage='[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">Lorem ipsum dolor sit amet, consectetur adipiscing elit <img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg'
  />
)
