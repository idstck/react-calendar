import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'
import EventForm from './EventForm'
import AppContext from '../../context/App/Context'

const EventEdit = () => {
  const [eventTitle, setEventTitle] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [isShowTime, setIsShowTime] = useState(false)
  const [dateStart, setDateStart] = useState(new Date())
  const [dateEnd, setDateEnd] = useState(new Date())
  const [colorSelected, setColorSelected] = useState('')

  const appContext = useContext(AppContext)
  const { events, selectedEvent } = appContext

  useEffect(() => {
    if (Object.keys(selectedEvent).length > 0) {
      setColorSelected(selectedEvent.color)
      setEventTitle(selectedEvent.title)
      setCheckbox(selectedEvent.allDay)
      let start = ''
      let end = ''
      if (!selectedEvent.allDay) {
        setIsShowTime(false)
        start = `${moment(new Date(selectedEvent.start)).format()}`
        end = `${moment(new Date(selectedEvent.end)).format()}`
      } else {
        start = `${moment(new Date(selectedEvent.start)).format('YYYY-MM-DD')}`
        end = `${moment(new Date(selectedEvent.end)).format('YYYY-MM-DD')}`
      }
      setDateStart(new Date(start))
      setDateEnd(new Date(end))
    }
  }, [selectedEvent, events])

  const colorsOption = [
    {
      title: 'Blue',
      hex: '#0d6efd',
    },
    {
      title: 'Green',
      hex: '#198754',
    },
    {
      title: 'Yellow',
      hex: '#FFC107',
    },
    {
      title: 'Red',
      hex: '#dc3545',
    },
  ]

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

  const setEvent = (id) => {
    let start = ''
    let end = ''
    if (checkbox) {
      start = `${moment(dateStart).format('YYYY-MM-DD')}`
      end = `${moment(dateEnd).format('YYYY-MM-DD')}`
    } else {
      start = `${moment(dateStart).format()}`
      end = `${moment(dateEnd).format()}`
    }

    const event = {
      id,
      title: eventTitle,
      start,
      end,
      allDay: checkbox,
      color: colorSelected,
    }

    return event
  }

  const reset = () => {
    setEventTitle('')
    setCheckbox(false)
    setIsShowTime(false)
    setDateStart(new Date())
    setDateEnd(new Date())
    setColorSelected('')
  }

  const eventSubmit = () => {
    const event = setEvent(events.length + 1)
    console.log(event)
    reset()
  }

  return (
    <EventForm
      modalId='edit-event'
      eventTitle={eventTitle}
      dateStart={dateStart}
      dateEnd={dateEnd}
      checkbox={checkbox}
      colorSelected={colorSelected}
      colorsOption={colorsOption}
      eventTitleChange={onEventTitleChange}
      checkboxChange={onCheckboxChange}
      colorChange={onColorChange}
      dateChange={onDateChange}
      isShowTime={isShowTime}
      eventSubmit={eventSubmit}
    />
  )
}

export default EventEdit
