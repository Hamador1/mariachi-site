import React from "react";
import "./calendar-event.styles.scss"
const CalendarEvent = ({item}) => {
    const start = item.start.dateTime;
    return(
        <div className="calendar-item">
            Start : {start}

        </div>
    )
}

export default CalendarEvent;