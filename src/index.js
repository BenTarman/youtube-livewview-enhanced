import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import listenToLiveChat from './LiveChatListener'

const insertionPoint = document.createElement('div')
insertionPoint.id = 'insertion-point'
document.body.appendChild(insertionPoint)

// gets the messages.
listenToLiveChat()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  insertionPoint
)
