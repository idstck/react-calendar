import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const EventForm = (props) => {
  const {
    eventTitle,
    dateStart,
    dateEnd,
    checkbox,
    colorSelected,
    colorsOption,
    eventTitleChange,
    checkboxChange,
    colorChange,
    dateChange,
    eventSubmit,
    isShowTime,
  } = props

  return (
    <div
      id='create-event'
      className='modal fade'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              Event Form
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <form action=''>
              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Event Title
                </label>
                <input
                  type='text'
                  name='event_title'
                  value={eventTitle}
                  onChange={eventTitleChange}
                  placeholder='Enter Title'
                  className='form-control'
                />
              </div>
              <div className='mb-3 form-check'>
                <input
                  type='checkbox'
                  name='checkbox'
                  value={checkbox}
                  onChange={checkboxChange}
                  className='form-check-input'
                />
                <label htmlFor='' className='form-label'>
                  All-day event? (Optional)
                </label>
              </div>
              <div className='mb-3'>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor='' className='form-label'>
                      Start
                    </label>
                    {!isShowTime ? (
                      <DatePicker
                        selected={dateStart}
                        onChange={dateChange('start')}
                        showTimeSelect
                        timeFormat={'p'}
                        timeIntervals={1}
                        dateFormat='Pp'
                        className='form-control'
                      />
                    ) : (
                      <DatePicker
                        selected={dateStart}
                        onChange={dateChange('start')}
                        dateFormat='Pp'
                        className='form-control'
                      />
                    )}
                  </div>
                  <div className='col'>
                    <label htmlFor='' className='form-label'>
                      End
                    </label>
                    {!isShowTime ? (
                      <DatePicker
                        selected={dateEnd}
                        onChange={dateChange('end')}
                        showTimeSelect
                        timeFormat={'p'}
                        timeIntervals={1}
                        dateFormat='Pp'
                        className='form-control'
                      />
                    ) : (
                      <DatePicker
                        selected={dateEnd}
                        onChange={dateChange('end')}
                        dateFormat='Pp'
                        className='form-control'
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='' className='form-label'>
                  Choose Event Color
                </label>
                <select
                  name='event_color'
                  id=''
                  className='form-control'
                  onChange={colorChange}
                  value={colorSelected}
                >
                  <option value='-'> - </option>
                  {colorsOption.map((color, index) => (
                    <option value={color.hex} key={index}>
                      {color.title}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              onClick={eventSubmit}
              disabled={!eventTitle || !dateStart || !dateEnd}
              type='button'
              data-bs-dismiss='modal'
              className='btn btn-primary'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventForm
