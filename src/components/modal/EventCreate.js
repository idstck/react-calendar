import React from 'react'
import EventForm from './EventForm'

const EventCreate = () => {
  const onEventTitlteChange = () => {}
  const onCheckboxChange = () => {}
  const onColorChange = () => {}
  const onDateChange = () => {}

  return (
    <EventForm
      eventTitle='Watch Movie'
      dateStart={new Date()}
      dateEnd={new Date()}
      checkbox={false}
      colorSelected='success'
      colorsOption={['primary', 'success', 'danger']}
      eventTitleChange={onEventTitlteChange}
      checkboxChange={onCheckboxChange}
      colorChange={onColorChange}
      dateChange={onDateChange}
      isShowTime={false}
    />
  )
}

export default EventCreate
