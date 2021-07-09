import { useState } from "react";

export function useCalendar() {
    const [event, setEvents] = useState([]);
    return {
        event,
        setEvents
    };
}