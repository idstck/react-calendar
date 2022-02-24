import { useReducer } from 'react'
import AppContext from './Context'
import AppReducer from './Reducer'

const AppState = (props) => {
  const intialState = {
    events: [],
    selectedEvent: {},
  }

  const [state, dispatch] = useReducer(AppReducer, intialState)

  return (
    <AppContext.Provider
      value={{
        events: state.events,
        selectedEvent: state.selectedEvent,
      }}
    ></AppContext.Provider>
  )
}
