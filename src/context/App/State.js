import { useReducer } from 'react'
import { ADD_EVENT } from '../types'
import AppContext from './Context'
import AppReducer from './Reducer'

const AppState = (props) => {
  const intialState = {
    events: [],
    selectedEvent: {},
  }

  const [state, dispatch] = useReducer(AppReducer, intialState)

  const addEvent = (event) => {
    let userEvent = [...state.events]
    userEvent.push(event)
    dispatch({
      type: ADD_EVENT,
      payload: userEvent,
    })
  }

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        selectedEvent: state.selectedEvent,
        addEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
