import React, { useState, useCallback } from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Resizable, ResizableBox } from 'react-resizable'
import 'react-resizable/css/styles.css'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import DragLayer from '../DragLayer/DragLayer'
import ChatList from '../ChatList/ChatList'
import DraggableBox from '../DraggableBox/DraggableBox'
import DropOverlay from '../DropOverlay/DropOverlay'
import Chatbox from '../Chatbox/Chatbox'
// ES6

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

const ResizableContainer = styled.div`
  position: absolute;

  transform: translate3d(${props => props.left}px, ${props => props.top}px, 0);

  // Parent nodes for the app will toggle this so make sure to manually set this on anything draggable to auto.
  pointer-events: auto;
`

// NEED TO USE DROP TARGET NESTING HERE ....
const FullscreenLiveViewChat = () => {
  const [boxes, setBoxes] = useState({
    a: { top: 500, left: 500, height: 200, width: 200, isResizing: true }
    // b: { top: 180, left: 20, height: 200, width: 200, isResizing: false }
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
      [id]: { ...boxes[[id]], left, top }
    })
  }

  const setSizeBox = (id, width, height, left, top) => {
    setBoxes({
      ...boxes,
      [id]: { ...boxes[[id]], width, height, left, top, isResizing: true }
    })
  }

  return (
    <>
      <Container ref={drop} canDrop={canDrop}>
        {Object.keys(boxes).map(key => {
          const { left, top, isResizing, width, height } = boxes[key]

          return (
            <div>
              {isResizing ? (
                <Resizable
                  width={width}
                  height={height}
                  onResize={(e, data) => {
                    let newLeft = left
                    let newTop = top
                    const deltaHeight = data.size.height - height
                    const deltaWidth = data.size.width - width

                    // For better user experience allows resizing from any angle to "feel" right.
                    // Note: If performance is an issue ever removing this feature should improve.
                    if (data.handle[0] === 'n') {
                      newTop -= deltaHeight
                    }
                    if (data.handle[data.handle.length - 1] === 'w') {
                      newLeft -= deltaWidth
                    }

                    setSizeBox(key, data.size.width, data.size.height, newLeft, newTop)
                  }}
                  resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
                >
                  <ResizableContainer left={left} top={top}>
                    <Chatbox
                      isResizing={isResizing}
                      isDragging={false}
                      width={width}
                      height={height}
                      left={left}
                      top={top}
                    />
                  </ResizableContainer>
                </Resizable>
              ) : (
                <DraggableBox key={key} id={key} left={left} top={top}>
                  <Chatbox className="lolol" isDragging={false} width={width} height={height} />
                </DraggableBox>
              )}
            </div>
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
