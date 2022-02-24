import React, { useContext } from 'react'
import AppContext from '../../context/App/Context'

const EventSelected = () => {
  const appContext = useContext(AppContext)
  const { selectedEvent } = appContext

  return (
    <div className='modal' tabIndex='-1' id='select-event'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div
            className='modal-header text-white'
            style={{ backgroundColor: selectedEvent.color }}
          >
            <h5 className='modal-title'>Event: {selectedEvent.title}</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Date Start</th>
                  <td>{selectedEvent.start}</td>
                </tr>
                <tr>
                  <th>Date End</th>
                  <td>{selectedEvent.end}</td>
                </tr>
                <tr>
                  <th>All Day?</th>
                  <td>{selectedEvent.allDay ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='modal-footer d-flex justify-content-evenly'>
            <button
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#edit-event'
              data-bs-dismiss='modal'
            >
              Edit Event
            </button>
            <span className='text-white'>Or</span>
            <button className='btn btn-danger' data-bs-dismiss='modal'>
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSelected
