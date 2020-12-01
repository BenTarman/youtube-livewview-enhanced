import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import FullscreenLiveViewChat from './components/FullscreenLiveviewChat/FullscreenLiveviewChat'

const theme = {
  fullscreen: {
    opacity: '0.5',
  },
}
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FullscreenLiveViewChat />
    </ThemeProvider>
  )
}

export default App
