import  { useState } from 'react';

export function useTimeSlotSelect() {
    const [timeSlotSelect, setTimeSlotSelect] = useState();

    function onChange(e) {
        setTimeSlotSelect(e.target.value);
    }

    return {
        timeSlotSelect,
        setTimeSlotSelect,
        onChange
    };
}