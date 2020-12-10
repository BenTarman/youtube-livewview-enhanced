/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import { wrapInTestContext } from 'react-dnd-test-utils'
import { cleanup, render } from '@testing-library/react'
import HTML5Backend from 'react-dnd-html5-backend'
import ReactTestUtils from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import { DragDropContext } from 'react-dnd'

import TestBackend from 'react-dnd-test-backend'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import FullscreenLiveviewchat from './FullscreenLiveviewChat'
import Chatbox from '../Chatbox/Chatbox'

const mockStore = configureStore()

describe('My Connected React-Redux Component', () => {
  let store

  /* TODO: So when testing in Jest it seems it thinks the styled component is a functional component
  and therefore cannot give it a ref. Will just disable the warning for this local test file for now,
  probably a bug with jest or styled components library */
  const originalWarn = console.error.bind(console.error)
  beforeAll(() => {
    console.error = msg => !msg.toString().includes('Function') && originalWarn(msg)
  })
  afterAll(() => {
    console.error = originalWarn
  })

  beforeEach(() => {
    store = mockStore({
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
          }
        ]
      }
    })
  })

  // Note: not using enzyme here since doesn't work well with jest snapshots and mocking the redux store.
  it('Should render and have correct styling and layout from last snapshot', () => {
    const FullscreenLiveviewchatContext = wrapInTestContext(FullscreenLiveviewchat)
    const { asFragment } = render(
      <Provider store={store}>
        <FullscreenLiveviewchatContext />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  /*
  it('Should render and have correct styling and layout from last snapshot', () => {
    const FullscreenLiveviewchatContext = wrapInTestContext(FullscreenLiveviewchat)

    const componentInstance = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <FullscreenLiveviewchatContext />
      </Provider>
    )


    // const backend = root.getManager().getBackend()


    const piece = ReactTestUtils.findRenderedComponentWithType(root, Piece)
    backend.simulateBeginDrag([piece.getHandlerId()])
    expect(piece.render().props.isDragging).toBeTruthy()

  })
      */
})
