import { useState } from "react";

export function usePackage() {
    const [ mariachiPackage, setMariachiPackage] = useState();
    return {
        mariachiPackage,
        setMariachiPackage
    };
}