import React, { useEffect } from 'react'
import { useDrag } from 'react-dnd'
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

const DraggableBox = ({ id, left, top, children }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id, left, top, type: 'chat-box' },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [])

  // Get current position of dragging box element.
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return (
    <Container ref={drag} transform={transform} isDragging={isDragging}>
      {children}
    </Container>
  )
}

DraggableBox.propTypes = {
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
}

export default DraggableBox
