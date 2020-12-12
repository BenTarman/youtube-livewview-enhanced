import React from 'react'
import { useDrop } from 'react-dnd'

import '../../App.css'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import DragLayer from '../DragLayer/DragLayer'

import ResizableDraggableBox from '../ResizableDraggableBox/ResizableDraggableBox'

import Chatbox from '../Chatbox/Chatbox'
import { moveBox, setSizeBox, setIsResizingBox } from '../../reducers/draggableAndResizableBox'
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

// NEED TO USE DROP TARGET NESTING HERE ....
const FullscreenLiveViewChat = () => {
  const boxes = useSelector(state => state.draggableAndResizableBox)
  const dispatch = useDispatch()

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'chat-box',
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      dispatch(moveBox(item.id, left, top))
      return undefined
    },

    // TODO: look into how efficient this is when have the time
    // (unsure if just making a custom useMemo hook would be better, I assume react dnd library implemented this to be efficient though)
    collect: monitor => ({
      canDrop: monitor.canDrop()
    })
  })

  return (
    <>
      <Container ref={drop} canDrop={canDrop}>
        {Object.keys(boxes).map(key => {
          const { left, top, isResizing, width, height } = boxes[key]

          return (
            <ResizableDraggableBox
              key={key}
              id={key}
              left={left}
              top={top}
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

                dispatch(setSizeBox(key, data.size.width, data.size.height, newLeft, newTop))
              }}
              onResizeStart={() => dispatch(setIsResizingBox(key, true))}
              onResizeStop={() => dispatch(setIsResizingBox(key, false))}
            >
              <Chatbox isDragging={false} isResizing={isResizing} width={width} height={height} left={left} top={top} />
            </ResizableDraggableBox>
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
