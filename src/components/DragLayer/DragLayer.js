import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useDragLayer } from 'react-dnd'
import Chatbox from '../Chatbox/Chatbox'
import usePerformantDrag from '../../hooks/performantDrag'

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
const getItemStyles = dragOffsetDiff => {
  if (!dragOffsetDiff) {
    return {
      display: 'none'
    }
  }

  const { x, y } = dragOffsetDiff

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform
  }
}

const DragLayer = () => {
  const { itemType, isDragging, item } = useDragLayer(monitor => ({
    // item will be needed to get any props with item.prop for the component.
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    isDragging: monitor.isDragging()
  }))

  const boxes = useSelector(state => state.draggableAndResizableBox)
  const dragOffsetDiff = usePerformantDrag(isDragging)

  function renderItem() {
    switch (itemType) {
      case 'chat-box':
        const { width, height, left, top } = boxes[item.id]
        return <Chatbox isDragging={true} width={width} height={height} left={left} top={top} />
      default:
        return null
    }
  }
  if (!isDragging) {
    return null
  }

  return (
    <Container>
      <div style={getItemStyles(dragOffsetDiff)}>{renderItem()}</div>
    </Container>
  )
}

export default DragLayer
