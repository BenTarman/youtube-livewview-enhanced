import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Chatbox from './Chatbox'

const mockStore = configureStore()
const store = mockStore({
  livechat: {
    chatMessages: [
      {
        authorPhotoNode: {
          src: 'https://yt3.ggpht.com/ytc/AAUvwngn_ZtDfYYF_LlERXSOsMxnvIEGHxM22iC08w=s32-c-k-c0x00ffffff-no-rj'
        },
        authorName: 'Author',
        chatBadge: null,
        chatMessage:
          '[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">Lorem ipsum dolor sit amet, consectetur adipiscing elit <img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg">'
      },
      {
        authorPhotoNode: {
          src: 'https://yt3.ggpht.com/ytc/AAUvwngn_ZtDfYYF_LlERXSOsMxnvIEGHxM22iC08w=s32-c-k-c0x00ffffff-no-rj'
        },
        authorName: 'Author',
        chatBadge: null,
        chatMessage:
          '[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">Lorem ipsum dolor sit amet, consectetur adipiscing elit <img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg">'
      },
      {
        authorPhotoNode: {
          src: 'https://yt3.ggpht.com/ytc/AAUvwngn_ZtDfYYF_LlERXSOsMxnvIEGHxM22iC08w=s32-c-k-c0x00ffffff-no-rj'
        },
        authorName: 'Author',
        chatBadge: null,
        chatMessage:
          '[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">Lorem<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg">'
      },
      {
        authorPhotoNode: {
          src: 'https://yt3.ggpht.com/ytc/AAUvwngn_ZtDfYYF_LlERXSOsMxnvIEGHxM22iC08w=s32-c-k-c0x00ffffff-no-rj'
        },
        authorName: 'Author',
        chatBadge: null,
        chatMessage:
          '[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">lorem<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg">'
      }
    ]
  }
})

export default {
  title: 'Chatbox',
  component: Chatbox,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
}

// Putting random haachama stream in background as picture to help better simulate the ui.

export const FullscreenLiveviewOverlay = () => (
  <Chatbox isDragging={false} width={500} height={500} isResizing={false} left={0} top={0} />
)
