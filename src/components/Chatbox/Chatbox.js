import React from 'react'
import styled from 'styled-components'
import ChatList from '../ChatList/ChatList'

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: green;
`

const Chatbox = () => {
  debugger
  return (
    <Box>
      <ChatList />
    </Box>
  )
}

export default Chatbox
