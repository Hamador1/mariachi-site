import { useState } from "react";

export function useAddress() {
    const [address, setAddress] = useState("");
    return {
        address,
        setAddress
    };
}