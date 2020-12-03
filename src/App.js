import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FullscreenLiveViewChat from './components/FullscreenLiveviewChat/FullscreenLiveviewChat'

const theme = {
  fullscreen: {
    opacity: '0.5'
  }
}
const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={theme}>
        <FullscreenLiveViewChat />
      </ThemeProvider>
    </DndProvider>
  )
}

export default App
