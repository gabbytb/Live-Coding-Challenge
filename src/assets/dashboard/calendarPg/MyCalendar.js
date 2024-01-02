import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';










const localizer = momentLocalizer(moment);
const myEvents = [
    {
      title: 'Event 1',
      start: new Date(2023, 0, 1, 10, 0), // January 1, 2023, 10:00 AM
      end: new Date(2023, 0, 1, 12, 0),   // January 1, 2023, 12:00 PM
    },
];



const MyCalendar = () => {
  

    return (
      <div>
        <h6 className='fw-bold pt-1 mb-4'>My Calendar</h6>

        <Calendar
          localizer={localizer}
          events={myEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 470 }}
        />
      </div>
    );
  };
  

  export default MyCalendar;