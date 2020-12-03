import React from 'react'
import styled from 'styled-components'
import { useDragLayer } from 'react-dnd'
import Chatbox from '../Chatbox/Chatbox'

const Container = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

// Manually use native javascript instead of styled components to set the transform.
const getItemStyles = (initialOffset, currentOffset) => {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    }
  }
  const { x, y } = currentOffset

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const DragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer(monitor => ({
    // item will be needed to get any props with item.prop for the component.
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }))
  function renderItem() {
    switch (itemType) {
      case 'chat-box':
        return <Chatbox />
      default:
        return null
    }
  }
  if (!isDragging) {
    return null
  }

  return (
    <Container>
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div>
    </Container>
  )
}

export default DragLayer
