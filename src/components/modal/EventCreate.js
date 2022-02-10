import React, { useState } from 'react'
import EventForm from './EventForm'

const EventCreate = () => {
  const [eventTitle, setEventTitle] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [isShowTime, setIsShowTime] = useState(false)
  const [dateStart, setDateStart] = useState(new Date())
  const [dateEnd, setDateEnd] = useState(new Date())
  const [colorSelected, setColorSelected] = useState('')

  const onEventTitleChange = (event) => {
    setEventTitle(event.target.value)
  }
  const onCheckboxChange = (event) => {
    if (event.target.checked === true) {
      setIsShowTime(true)
      setCheckbox(true)
    } else {
      setIsShowTime(false)
      setCheckbox(false)
    }
  }
  const onDateChange = (propertyName) => (event) => {
    if (propertyName === 'start') {
      setDateStart(event)
    }

    if (propertyName === 'end') {
      setDateEnd(event)
    }
  }

  const onColorChange = (event) => {
    if (event.target.value !== '-') {
      setColorSelected(event.target.value)
    } else {
      setColorSelected('-')
    }
  }

  return (
    <EventForm
      eventTitle={eventTitle}
      dateStart={dateStart}
      dateEnd={dateEnd}
      checkbox={checkbox}
      colorSelected={colorSelected}
      colorsOption={['primary', 'success', 'danger']}
      eventTitleChange={onEventTitleChange}
      checkboxChange={onCheckboxChange}
      colorChange={onColorChange}
      dateChange={onDateChange}
      isShowTime={isShowTime}
    />
  )
}

export default EventCreate
