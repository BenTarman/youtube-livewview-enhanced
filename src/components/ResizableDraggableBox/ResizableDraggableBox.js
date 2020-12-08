import React, { useEffect, useState } from 'react'
import { useDrag } from 'react-dnd'
import { Resizable, ResizableBox } from 'react-resizable'
import styled from 'styled-components'
import { getEmptyImage } from 'react-dnd-html5-backend'
import PropTypes from 'prop-types'

const Container = styled.div`
  transform: ${props => props.transform};
  position: absolute;

  // For now lets just always hide element while dragging since will force you to code a preview drag
  opacity: ${props => (props.isDragging ? 0 : 1)};
  height: ${props => (props.isDragging ? 0 : '')};

  // Parent nodes for the app will toggle this so make sure to manually set this on anything draggable to auto.
  pointer-events: auto;
`

// eslint-disable-next-line react/prop-types
const ResizableDraggableBox = ({ id, left, top, children, width, height, onResize, onResizeStart, onResizeStop }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id, left, top, type: 'chat-box' },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  // Will locally keep track if resizing is in progress, if so we will set the drag ref
  const [isResizing, setIsResizing] = useState(false)

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  // Get current position of dragging box element.
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return (
    <Resizable
      width={width}
      height={height}
      onResize={(e, data) => onResize(e, data)}
      resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      onResizeStart={() => setIsResizing(true) || onResizeStart()}
      onResizeStop={() => setIsResizing(false) || onResizeStop()}
    >
      <Container ref={isResizing ? null : drag} transform={transform} isDragging={isDragging}>
        {children}
      </Container>
    </Resizable>
  )
}

ResizableDraggableBox.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default ResizableDraggableBox
