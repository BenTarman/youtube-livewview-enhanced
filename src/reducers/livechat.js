const actionTypes = {
  ADD: 'ADD'
}

const initialState = {
  chatMessages: []
}

const livechatReducer = (state = initialState, action) => {
  console.log('omg think this will work')
  console.log(state)
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload]
      }
    default:
      return state
  }
}

export const addLiveChat = liveChatObj => {
  return { type: actionTypes.ADD, payload: liveChatObj }
}

export default livechatReducer
