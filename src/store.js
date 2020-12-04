import { createStore, combineReducers } from 'redux'
import livechatReducer from './reducers/livechat'

// Global store is this variable.
const reducer = combineReducers({
  livechat: livechatReducer
})

const store = createStore(reducer)

export default store
