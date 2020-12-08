import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'

const Box = styled.div`
  background-color: lightgrey;
  padding: 20px;

  height: ${props => props.height}px;
  width: ${props => props.width}px;

  margin: ${props => props.top} 0 0 ${props => props.left};
`

// eslint-disable-next-line react/prop-types
const Chatbox = ({ isDragging, width, height, isResizing, left, top }) => {
  return (
    <Box height={height} width={width} left={left} top={top}>
      {!isDragging && !isResizing ? <ChatList /> : <div>You are Dragging</div>}
    </Box>
  )
}

Chatbox.propTypes = {
  isDragging: PropTypes.bool.isRequired
}

export default Chatbox
