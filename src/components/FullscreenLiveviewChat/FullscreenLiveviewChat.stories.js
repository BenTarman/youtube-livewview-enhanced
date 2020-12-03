import React from 'react'
import styled from 'styled-components'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FullscreenLiveviewChat from './FullscreenLiveviewChat'

// Just making a simple container with relative positioning, this should mimic the youtube player wrapper container good enough so
// can test drag/drop stuff on the storybook easily.
const Container = styled.div`
  width: 80%;
  height: 50%;
  position: relative;
`
const Img = styled.img`
  height: 100%;
  width: 100%;
`

export default {
  title: 'FullscreenLiveviewChat',
  component: FullscreenLiveviewChat
}

// Putting random haachama stream in background as picture to help better simulate the ui.
export const FullscreenLiveviewOverlay = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Img src="/haachamastream.png" alt="" />
        <FullscreenLiveviewChat />
      </Container>
    </DndProvider>
  )
}
