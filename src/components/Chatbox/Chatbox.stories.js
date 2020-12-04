import React from 'react'
import Chatbox from './Chatbox'

export default {
  title: 'Chatbox',
  component: Chatbox
}

// Putting random haachama stream in background as picture to help better simulate the ui.
export const FullscreenLiveviewOverlay = () => <Chatbox />
