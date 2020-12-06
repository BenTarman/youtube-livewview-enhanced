/*
Reducer to contain the state of the multiple draggable/resizable box widgets the
user can add and customize!
*/
const actionTypes = {
  ADD_BOX: 'ADD_BOX',
  MOVE_BOX: 'MOVE_BOX',
  RESIZE_BOX: 'RESIZE_BOX'
}

// This isn't an array since each object will need a unique id (so we can keep track what is being dragged and what's not)
// TODO: when implement ADD_BOX think how we will generate ids (will probably jsut limit how many can be created honestly)
const initialState = {
  a: { top: 500, left: 500, height: 200, width: 200, isResizing: true }
}

const draggableAndResizableBoxReducer = (state = initialState, action) => {
  const { id, left, top, width, height } = action.payload
  switch (action.type) {
    case actionTypes.MOVE_BOX:
      return {
        ...state,
        [id]: { ...state[[id]], left, top }
      }
    case actionTypes.RESIZE_BOX:
      return {
        ...state,
        [id]: { ...state[[id]], width, height, left, top, isResizing: true }
      }

    default:
      return state
  }
}

export const addLiveChat = liveChatObj => {
  return { type: actionTypes.ADD, payload: liveChatObj }
}

export const moveBox = (id, left, top) => {
  return { type: actionTypes.MOVE_BOX, payload: { id, left, top } }
}

export const setSizeBox = (id, width, height, left, top) => {
  return { type: actionTypes.RESIZE_BOX, payload: { id, left, top, width, height } }
}

export default draggableAndResizableBoxReducer
