import React, { useState, useCallback } from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import DragLayer from '../DragLayer/DragLayer'
import ChatList from '../ChatList/ChatList'
import DraggableBox from '../DraggableBox/DraggableBox'
import DropOverlay from '../DropOverlay/DropOverlay'
import Chatbox from '../Chatbox/Chatbox'
import {
  TOP_RIGHT_DROP_SOURCE,
  TOP_LEFT_DROP_SOURCE,
  BOTTOM_LEFT_DROP_SOURCE,
  BOTTOM_RIGHT_DROP_SOURCE,
  LEFT_SIDE_DROP_SOURCE
} from '../../utils/Constants'

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* If this drop source component is in a state where a user "can drop" something onto it, 
  make sure pointer events enabled Otherwise, disable pointer events so user can interact 
  with youtube player with no problems */
  pointer-events: ${props => (props.canDrop ? 'auto' : 'none')};
`

const ResizableBox = styled.div`
  height: 200px;
  width: 200px;
`

// NEED TO USE DROP TARGET NESTING HERE ....
const FullscreenLiveViewChat = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 500, left: 500, title: 'Drag me around' },
    b: { top: 180, left: 20, title: 'Drag me too' }
  })

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'chat-box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      return undefined
    },

    // TODO: look into how efficient this is when have the time
    // (unsure if just making a custom useMemo hook would be better, I assume react dnd library implemented this to be efficient though)
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
  })

  const moveBox = (id, left, top) => {
    setBoxes({
      ...boxes,
      [id]: { left, top }
    })
  }

  return (
    <>
      <Container ref={drop} canDrop={canDrop}>
        {Object.keys(boxes).map(key => {
          const { left, top } = boxes[key]
          return (
            <DraggableBox key={key} id={key} left={left} top={top}>
              <Chatbox isDragging={false} />
            </DraggableBox>
          )
        })}
      </Container>
      <DragLayer />
    </>
  )
}

export default FullscreenLiveViewChat

// TODO: Mess with adding more drop targets later (need to set these as "greedy" drop targets i think will figure it out later)
/*
        <DropOverlay position={TOP_RIGHT_DROP_SOURCE} />

        <DropOverlay position={LEFT_SIDE_DROP_SOURCE} isSidePanel={true}>
          <DropOverlay position={TOP_LEFT_DROP_SOURCE} />
          <DropOverlay position={BOTTOM_LEFT_DROP_SOURCE} />
        </DropOverlay>

        <DropOverlay position={BOTTOM_RIGHT_DROP_SOURCE} />
        */
