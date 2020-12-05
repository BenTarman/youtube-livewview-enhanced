import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'

const Box = styled.div`
  display: block;
  background-color: blue;
  padding: 20px;

  height: 500px;
  width: 500px;
`

const Chatbox = ({ isDragging }) => {
  return <Box>{!isDragging ? <ChatList /> : <div>You are Dragging</div>}</Box>
}

Chatbox.propTypes = {
  isDragging: PropTypes.bool.isRequired
}

export default Chatbox
