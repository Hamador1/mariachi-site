import { useState } from "react";

export function useMarkerBool() {
    const [ markerValid, setMarkerValid ] = useState(false);
    return {
        markerValid, setMarkerValid
    };
}