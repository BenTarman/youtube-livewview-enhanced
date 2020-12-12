/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import { wrapInTestContext } from 'react-dnd-test-utils'
import { act, cleanup, render } from '@testing-library/react'
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
import ResizableDraggableBox from '../ResizableDraggableBox/ResizableDraggableBox'

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
        a: { top: 500, left: 500, height: 200, width: 200, isResizing: true, isDragging: true }
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

  it('Should have React dnd library should be detecting drag sources and properly updating monitored state', () => {
    const FullscreenLiveviewchatContext = wrapInTestContext(FullscreenLiveviewchat)

    // Since the code base uses functional components, we create a ref so we can access component instance
    const ref = React.createRef()

    // NOTE: due to bug in enzyme need to wrap component in a fragment.
    mount(
      <>
        <Provider store={store}>
          <FullscreenLiveviewchatContext ref={ref} />
        </Provider>
      </>
    )

    // Get backend we are testing.
    const backend = ref.current.getManager().getBackend()

    // Get all the drag sources ids.
    const draggableObjectSources = Array.from(ref.current.getManager().getRegistry().dragSources.keys())

    // Get the monitor to watch for drag/drop state
    const monitor = ref.current.getManager().getMonitor()

    // Expect default to not be dragging.
    expect(monitor.isDragging()).toBe(false)

    // Start dragging all the draggable sources.
    act(() => {
      backend.simulateBeginDrag(draggableObjectSources)
    })

    // Expect us dragging state to be monitored
    expect(monitor.isDragging()).toBe(true)

    // Stop dragging sources.
    act(() => {
      backend.simulateEndDrag(draggableObjectSources)
    })

    // Expect us dragging state to be monitored
    expect(monitor.isDragging()).toBe(false)
  })
})
