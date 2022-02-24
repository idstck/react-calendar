import React, { useContext, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AppContext from '../../context/App/Context'

const Calendar = () => {
  const appContext = useContext(AppContext)
  const { events, getEvents } = appContext

  useEffect(() => {
    getEvents()
  }, [events])

  return (
    <div className='col-9'>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height={700}
        contentHeight={700}
        events={events}
      />
    </div>
  )
}

export default Calendar
