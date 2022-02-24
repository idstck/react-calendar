import { useReducer } from 'react'
import { useLocalStorage } from '../../hook/storage'
import {
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_EVENTS,
  SELECT_EVENT,
} from '../types'
import AppContext from './Context'
import AppReducer from './Reducer'

const AppState = (props) => {
  const intialState = {
    events: [],
    selectedEvent: {},
  }

  const [state, dispatch] = useReducer(AppReducer, intialState)
  const [item, setValue] = useLocalStorage('events')
  const [selectedItem, setSelectedItem] = useLocalStorage('selectedEvent')

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

  const selectEvent = (event) => {
    setSelectedItem(event)
    dispatch({
      type: SELECT_EVENT,
      payload: event,
    })
  }

  const editEvent = (event) => {
    const newEvents = item.map((item) => {
      return item.id === event.id ? event : item
    })
    setValue(newEvents)
    dispatch({
      type: EDIT_EVENT,
      payload: newEvents,
    })
  }

  const deleteEvent = (event) => {
    const newEvents = item.filter((item) => item.id !== event.id)
    setValue(newEvents)
    dispatch({
      type: DELETE_EVENT,
      payload: newEvents,
    })
    dispatch({
      type: SELECT_EVENT,
      payload: {},
    })
  }

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        selectedEvent: state.selectedEvent,
        addEvent,
        getEvents,
        selectEvent,
        editEvent,
        deleteEvent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
