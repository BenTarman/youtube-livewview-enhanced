import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import FullscreenLiveViewChat from './components/FullscreenLiveviewChat/FullscreenLiveviewChat'
import Theme from './Theme'

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Theme>
        <FullscreenLiveViewChat />
      </Theme>
    </DndProvider>
  )
}

export default App
