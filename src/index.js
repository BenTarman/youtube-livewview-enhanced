import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import listenToLiveChat from './LiveChatListener'
import store from './store'

const insertionPoint = document.createElement('div')
insertionPoint.id = 'insertion-point'
document.body.appendChild(insertionPoint)

listenToLiveChat()

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  insertionPoint
)
