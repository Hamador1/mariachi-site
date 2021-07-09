import { useState } from "react";

export function useGroupSize() {
    const [groupSize, setGroupSize] = useState();
    return {
        groupSize,
        setGroupSize
    };
}