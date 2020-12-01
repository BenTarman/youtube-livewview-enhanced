import React from 'react'
import styled from 'styled-components'
import ChatList from '../ChatList/ChatList'

const OverlayContainer = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(
    ${props => props.theme.fullscreen.overlayColor.r},
    ${props => props.theme.fullscreen.overlayColor.g},
    ${props => props.theme.fullscreen.overlayColor.b},
    ${props => props.theme.fullscreen.opacity}
  );
`
const FullscreenLiveViewChat = () => {
  return (
    <OverlayContainer>
      <ChatList />
    </OverlayContainer>
  )
}

export default FullscreenLiveViewChat
