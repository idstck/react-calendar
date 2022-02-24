import React, { useContext } from 'react'
import EventCreate from '../modal/EventCreate'
import AppContext from '../../context/App/Context'

const Sidebar = () => {
  const appContext = useContext(AppContext)
  const { events, selectEvent } = appContext

  return (
    <div className='col-3'>
      <div className='d-grid gap-2'>
        <button
          data-bs-toggle='modal'
          data-bs-target='#create-event'
          className='btn btn-primary'
        >
          Create New Task
        </button>
      </div>
      <div className='m-t-20'>
        <br />
        {events.length > 0 ? (
          events.map((event, index) => (
            <div
              className='my-1 p-2 text-white'
              style={{ backgroundColor: event.color }}
              key={index}
              onClick={() => selectEvent(event)}
            >
              {event.title}
            </div>
          ))
        ) : (
          <p>Empty Event</p>
        )}
      </div>

      <EventCreate />
    </div>
  )
}

export default Sidebar
