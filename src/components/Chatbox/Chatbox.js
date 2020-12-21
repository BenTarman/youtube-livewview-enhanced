import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'

import Theme from '../../Theme'
import ChatboxSettings from '../ChatboxSettings/ChatboxSettings'

const Box = styled.div`
  background-color: ${props => rgba(props.theme.fullscreen.containerColor, props.theme.fullscreen.opacity)};
  padding: 20px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;

  margin: ${props => props.top} 0 0 ${props => props.left};
`

const ToolTip = styled.div`
  background-color: green;
  margin-left: 20px;
`

// TODO: replace this with gear svg when in the mood.
const Button = styled.button`
  cursor: pointer;
  display: none;
`

const Container = styled.div`
  display: flex;

  &:hover {
    Button {
      display: inherit;
    }
  }
`

// eslint-disable-next-line react/prop-types
const Chatbox = ({ isDragging, width, height, isResizing, left, top }) => {
  return (
    <Container>
      <Box height={height} width={width} left={left} top={top}>
        <Button type="button">Edit Config (temp button)</Button>
        {!isDragging && !isResizing ? <ChatList /> : <div>You are Dragging</div>}
      </Box>

      <ToolTip>
        <ChatboxSettings />
      </ToolTip>
    </Container>
  )
}

Chatbox.propTypes = {
  isDragging: PropTypes.bool.isRequired
}

export default Chatbox
