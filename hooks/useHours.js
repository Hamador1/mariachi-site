import { useState } from "react";

export function useHours() {
    const [ numberOfHours, setNumberOfHours] = useState();
    return {
        numberOfHours,
        setNumberOfHours
    };
}