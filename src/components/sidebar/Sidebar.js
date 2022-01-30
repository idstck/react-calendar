import React from 'react'
import EventCreate from '../modal/EventCreate'

const Sidebar = () => {
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
      <div className='m-t-20 text-white'>
        <br />
        <div className='my-1 p-2 bg-primary'>Watch Movies</div>
        <div className='my-1 p-2 bg-success'>Learn</div>
        <div className='my-1 p-2 bg-danger'>Hangout</div>
      </div>

      <EventCreate />
    </div>
  )
}

export default Sidebar
