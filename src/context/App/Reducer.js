import { ADD_EVENT } from '../types'

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      }
    default:
      return state
  }
}

export default AppReducer
