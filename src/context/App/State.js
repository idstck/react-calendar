import { useReducer } from 'react'
import { useLocalStorage } from '../../hook/storage'
import { ADD_EVENT, GET_EVENTS } from '../types'
import AppContext from './Context'
import AppReducer from './Reducer'

const AppState = (props) => {
  const intialState = {
    events: [],
    selectedEvent: {},
  }

  const [state, dispatch] = useReducer(AppReducer, intialState)
  const [item, setValue] = useLocalStorage('events')

  const addEvent = (event) => {
    let userEvent = [...state.events]
    userEvent.push(event)
    setValue(userEvent)
    dispatch({
      type: ADD_EVENT,
      payload: userEvent,
    })
  }

  const getEvents = () => {
    if (item) {
      dispatch({
        type: GET_EVENTS,
        payload: item,
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        selectedEvent: state.selectedEvent,
        addEvent,
        getEvents,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
