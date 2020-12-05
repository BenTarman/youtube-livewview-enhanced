import React from 'react'
import styled from 'styled-components'
import ChatList from '../ChatList/ChatList'

const Box = styled.div`
  display: inline-block;
  background-color: green;
  padding: 20px;
`

const Chatbox = () => {
  return (
    <Box>
      <ChatList />
    </Box>
  )
}

export default Chatbox
