import { createStore, combineReducers } from 'redux'
import livechatReducer from './reducers/livechat'
import draggableAndResizableBoxReducer from './reducers/draggableAndResizableBox'

// Global store is this variable.
const reducer = combineReducers({
  livechat: livechatReducer,
  draggableAndResizableBox: draggableAndResizableBoxReducer
})

const store = createStore(reducer)

export default store
