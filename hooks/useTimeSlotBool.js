import { useState } from "react";

export function useTimeSlotBool() {
    const [ timeSlotBool, setTimeSlotBool ] = useState(false);
    return {
        timeSlotBool, setTimeSlotBool
    };
}
