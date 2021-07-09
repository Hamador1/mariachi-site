import { useState } from "react";

export function useDisplayName() {
    const [displayName, setDisplayName] = useState();
    return {
        displayName, setDisplayName
    };
}