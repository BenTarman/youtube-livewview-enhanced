/*
Reducer to contain the state of the multiple draggable/resizable box widgets the
user can add and customize!
*/
const actionTypes = {
  ADD_BOX: 'ADD_BOX',
  MOVE_BOX: 'MOVE_BOX',
  RESIZE_BOX: 'RESIZE_BOX',
  SET_IS_RESIZING: 'SET_IS_RESIZING'
}

// This isn't an array since each object will need a unique id (so we can keep track what is being dragged and what's not)
// TODO: when implement ADD_BOX think how we will generate ids (will probably jsut limit how many can be created honestly)
const initialState = {
  a: { top: 500, left: 500, height: 200, width: 200, isResizing: false, isDragging: false }
}

const draggableAndResizableBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVE_BOX:
      return {
        ...state,
        [action.payload.id]: { ...state[[action.payload.id]], left: action.payload.left, top: action.payload.top }
      }
    case actionTypes.RESIZE_BOX:
      return {
        ...state,
        [action.payload.id]: {
          ...state[[action.payload.id]],
          width: action.payload.width,
          height: action.payload.height,
          left: action.payload.left,
          top: action.payload.top,
          isResizing: true
        }
      }

    case actionTypes.SET_IS_RESIZING:
      return {
        ...state,
        [action.payload.id]: {
          ...state[[action.payload.id]],
          isResizing: action.payload.isResizing
        }
      }

    default:
      return state
  }
}

export const moveBox = (id, left, top) => {
  return { type: actionTypes.MOVE_BOX, payload: { id, left, top } }
}

export const setSizeBox = (id, width, height, left, top) => {
  return { type: actionTypes.RESIZE_BOX, payload: { id, left, top, width, height } }
}

export const setIsResizingBox = (id, isResizing) => {
  return { type: actionTypes.SET_IS_RESIZING, payload: { id, isResizing } }
}

export default draggableAndResizableBoxReducer
