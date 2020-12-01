import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ChatList from '../ChatList/ChatList'
import DropOverlay from '../DropOverlay/DropOverlay'
import {
  TOP_RIGHT_DROP_SOURCE,
  TOP_LEFT_DROP_SOURCE,
  BOTTOM_LEFT_DROP_SOURCE,
  BOTTOM_RIGHT_DROP_SOURCE,
  LEFT_SIDE_DROP_SOURCE
} from '../../utils/Constants'

// NEED TO USE DROP TARGET NESTING HERE ....
const FullscreenLiveViewChat = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DropOverlay position={TOP_RIGHT_DROP_SOURCE}>
        <ChatList />
      </DropOverlay>

      <DropOverlay position={LEFT_SIDE_DROP_SOURCE} isSidePanel={true}>
        <DropOverlay position={TOP_LEFT_DROP_SOURCE} />
        <DropOverlay position={BOTTOM_LEFT_DROP_SOURCE} />
      </DropOverlay>

      <DropOverlay position={BOTTOM_RIGHT_DROP_SOURCE} />
    </DndProvider>
  )
}

export default FullscreenLiveViewChat
