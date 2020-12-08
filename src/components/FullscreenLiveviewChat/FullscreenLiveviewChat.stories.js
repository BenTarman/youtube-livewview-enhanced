import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { Provider } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import configureStore from 'redux-mock-store'

// eslint-disable-next-line import/no-named-as-default-member
import FullscreenLiveviewChat from './FullscreenLiveviewChat'

const mockStore = configureStore()
const store = mockStore({
  draggableAndResizableBox: {
    a: { top: 500, left: 500, height: 200, width: 200, isResizing: true }
  },

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
          '[EN]<img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u1f4ac.svg">Lorem ipsum dolor sit amet, consectetur adipiscing elit <img src="https://www.youtube.com/s/gaming/emoji/9cda877f/emoji_u2764.svg">'
      }
    ]
  }
})

// Just making a simple container with relative positioning, this should mimic the youtube player wrapper container good enough so
// can test drag/drop stuff on the storybook easily.
const Container = styled.div`
  width: 80%;
  height: 50%;
  position: relative;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`

export default {
  title: 'FullscreenLiveviewChat',
  component: FullscreenLiveviewChat
}

// Putting random haachama stream in background as picture to help better simulate the ui.
export const FullscreenLiveviewOverlay = () => {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Container>
          <Img src="/haachamastream.png" alt="" />
          <FullscreenLiveviewChat />
        </Container>
      </DndProvider>
    </Provider>
  )
}
